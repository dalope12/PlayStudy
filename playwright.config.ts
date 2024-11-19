import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const STORAGE_STATE_PATH = "./tests/.auth/user.json";

const baseURL = process.env.TEST_ENV === 'prod' ? process.env.PROD_URL
                : process.env.TEST_ENV === 'stg'? process.env.STG_URL
                : process.env.TEST_ENV === 'temp_stg'? process.env.TEMP_STG_URL
                : process.env.UAT_URL;

// Load environment variables from .env file
dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Run tests in files in parallel.
  forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code. 
  retries: process.env.CI ? 1 : 0, // Retry on CI only.
  workers: 1, // Parallel tests on CI.
  reporter: [['list'], ['json', { outputFile: 'test-results/test-results.json' }], ['html']], // Reporter to use. See https://playwright.dev/docs/test-reporters
  
  use: {// Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
    baseURL: baseURL, // Base URL to use in actions like `await page.goto('/')`.
    headless: false,
    video: {
      mode: 'retain-on-failure',
      size: { width: 1500, height: 720 }
    },
    trace: 'on-first-retry', // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    launchOptions: {// Capture console logs.
      args: ['--disable-infobars'],
    },
    viewport: { width: 1500, height: 720 },
    screenshot: 'only-on-failure',
    ignoreHTTPSErrors: true,
    testIdAttribute: 'aria-description', // https://playwright.dev/docs/locators#locate-by-test-id
  },

  timeout: 3 * 60 * 1000, // minutes - Maximum time one test can run for.
  expect: {
    timeout: 45 * 1000 // 45 seconds - Maximum time expect() should wait for the condition to be met.
  },

  projects: [// Configure projects for major browsers
    {
      name: "API",
      testMatch: "tests/backend/api/*.spec.ts",
      use: {},
    },
    {
      name: "DB",
      testMatch: "tests/backend/database/*.spec.ts",
      use: {},
    },
    {
      name: "FrontEnd",
      testMatch: "tests/frontend/*.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1500, height: 720 },
      },
    }
  ],
});

console.log('Base URL:', baseURL);

export { STORAGE_STATE_PATH };