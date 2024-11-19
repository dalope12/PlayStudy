import { Page, Locator, expect } from '@playwright/test';


export class ForgotPassword {
    readonly page: Page;
    readonly forgotPasswordLabel: Locator;
    readonly emailAddress: Locator;
    readonly sendButton: Locator;
    readonly goBackButton: Locator;
    readonly dontHaveAccountLabel: Locator;
    readonly signUpButton: Locator;
    readonly emailErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.forgotPasswordLabel = page.getByRole('heading', { name: 'Forgot Password' });
        this.emailAddress = page.getByPlaceholder('Email address');
        this.sendButton = page.getByRole('button', { name: 'Send' });
        this.goBackButton = page.getByRole('link', { name: 'Go Back' });
        this.dontHaveAccountLabel = page.getByText('Don\'t have an account? Sign');
        this.signUpButton = page.getByRole('link', { name: 'Sign up.' });
        this.emailErrorMessage = page.getByText('Email is required.');
    }

    async clickSend() {
        await this.sendButton.waitFor({ state: 'visible' });
        await this.sendButton.click();
    }

    async clickGoBack() {
        await this.goBackButton.waitFor({ state: 'visible' });
        await this.goBackButton.click();
    }

    async clickSignUp() {
        await this.signUpButton.waitFor({ state: 'visible' });
        await this.signUpButton.click();
    }

    async verifyElementsAreVisible() {
        await expect(this.forgotPasswordLabel).toBeVisible();
        await expect(this.emailAddress).toBeVisible();
        await expect(this.sendButton).toBeVisible();
        await expect(this.sendButton).toBeVisible();
        await expect(this.goBackButton).toBeVisible();
        await expect(this.dontHaveAccountLabel).toBeVisible();
        await expect(this.signUpButton).toBeVisible();
    }

    async verifyErrorMessageInElementIsVisible() {
        await expect(this.forgotPasswordLabel).toBeVisible();
        await expect(this.emailAddress).toBeVisible();
        await expect(this.sendButton).toBeVisible();
        await expect(this.sendButton).toBeVisible();
        await expect(this.goBackButton).toBeVisible();
        await expect(this.dontHaveAccountLabel).toBeVisible();
        await expect(this.signUpButton).toBeVisible();
        await expect(this.emailErrorMessage).toBeVisible();
    }

}
