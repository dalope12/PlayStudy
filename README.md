## Project Overview
This project is a test automation suite using TypeScript and Playwright.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#tests-reports)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (>= 20.x)
- npm (>= 10.x)

## Installation

Follow these steps to install and set up the project:

1. **Clone the repository**:
   ```
   git clone git clone https://user@xxx/automation.git
   ```

2. **Install dependencies**:
   ```
   npm install
   npx playwright install
   ```
## Running Tests

### Frontend Tests

1. **Run all frontend tests**:
   ```
   npx playwright test frontend
   ```
   ```
   npm playwright frontend
   ```

2. **Run specific frontend test**:
   ```
   npx playwright test tests/frontend/test-file.spec.ts
   ```
   ```
   npm test tests/backend/api/test-file.spec.ts
   ```
3. **Run specific test case**:
   ```
   npx playwright -- -g 'Name of your specific test case'
   ```
   ```
    $env:TEST_ENV='prod'; npm test -- -g 'Name of your specific test case'
   ```

### Full Test Suite

1. **Run all frontend tests**:
   ```
   npm test
   ```

### Other commands

1. **Run tests in headed browsers**:
   ```
   npx playwright test --headed
   npm run test -- --ui --debug
   ```
2. **Run test generator**:
   ```
   npx playwright codegen URL_HERE
   npx playwright codegen https://www.google.com
   ```
3. **More Information**:

Go to https://playwright.dev/docs/test-cli for more Command line options.

## Test Reports

**Generate HTML report**:
   ```
   npx playwright show-report
   ```


## Folder Structure

Here's an overview of the folder structure:

```
cs_test_automation/
├── pages/
├── tests/
│   ├── frontend/
│   │   └── test.spec.ts
├── utils/
│   ├── JsonFile.ts
├── config.json
├── .env
├── bitbucket-pipelines.yml
├── package.json
├── playwright.config.ts
```

## Contributing

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-branch`)
3. **Commit your changes** (`git commit -am 'Add some feature'`)
4. **Push to the branch** (`git push origin feature-branch`)
5. **Create a new Pull Request**
