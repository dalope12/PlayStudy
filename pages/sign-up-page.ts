import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';


export class SignUp {
    readonly page: Page;
    readonly carrierAssureLogo: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly userName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.carrierAssureLogo = page.getByRole('img', { name: 'Carrier Assure logo', exact: true });
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.userName = page.getByPlaceholder('User Name');
        this.companyTypeDropdown = page.getByLabel('Company Type');
        this.password = page.getByPlaceholder('Password', { exact: true });
        this.confirmPassword = page.getByPlaceholder('Confirm Password');
        this.businessName = page.getByPlaceholder('Business Name');
        this.emailAddress = page.getByPlaceholder('Email address');
        this.termsAndConditionsCheckbox = page.getByLabel('I agree to the Terms of');
        this.termsAndConditionsLabel = page.getByText('I agree to the Terms of');
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
        this.signInButton = page.getByRole('link', { name: 'Sign In' });

        // Error messages
        this.firstNameErrorMessage = page.getByText('First Name is required.');
        this.lastNameErrorMessage = page.getByText('Last Name is required.');
        this.userNameErrorMessage = page.getByText('User Name is required.');
        this.companyTypeDropdownErrorMessage = page.getByText('Company Type is required.');
        this.passwordErrorMessage = page.getByText('Password is required.', { exact: true });
        this.confirmPasswordErrorMessage = page.getByText('Confirm Password is required.');
        this.businessNameErrorMessage = page.getByText('Business Name is required.');
        this.emailAddressErrorMessage = page.getByText('Email is required.');
        this.termsAndConditionsErrorMessage = page.getByText('Please check this box if you');
    }

    async typeFirstName(firstName: string) {
        await this.firstName.waitFor({ state: 'visible' });
        await this.firstName.click();
        await this.firstName.fill(firstName);
    }

    async clearValueInFirstName() {
        await this.firstName.waitFor({ state: 'visible' });
        await this.firstName.click();
        await this.firstName.clear();
    }

    async typeLastName(lastName: string) {
        await this.lastName.waitFor({ state: 'visible' });
        await this.lastName.click();
        await this.lastName.fill(lastName);
    }

    async clearValueInLastName() {
        await this.lastName.waitFor({ state: 'visible' });
        await this.lastName.click();
        await this.lastName.clear();
    }

    async typeUserName(userName: string) {
        await this.userName.waitFor({ state: 'visible' });
        await this.userName.click();
        await this.userName.fill(userName);
    }

    async clearValueInUserName() {
        await this.userName.waitFor({ state: 'visible' });
        await this.userName.click();
        await this.userName.clear();
    }

    async clickOnCompanyTypeButton() {
        await this.companyTypeDropdown.waitFor({ state: 'visible' });
        await this.companyTypeDropdown.click();
    }

static async waitUntilIsVisibleAndClickOnOption(option: string, page: Page) {
        const optionLocator: Locator = page.getByRole('option', { name: option });
        await optionLocator.waitFor({ state: 'visible' });
        await optionLocator.click();
    }

    /**
    * Company Type options are 'Carrier', Shipper or 'Broker'
    */
    async clickOnCompanyTypeOption(option: string) {
        this.waitUntilIsVisibleAndClickOnOption(option, this.page);
        await this.page.waitForTimeout(1000);
    }

    async typePassword(password: string) {
        await this.password.waitFor({ state: 'visible' });
        await this.password.click();
        await this.password.fill(password);
    }

    async clearValueInPassword() {
        await this.password.waitFor({ state: 'visible' });
        await this.password.click();
        await this.password.clear();
    }

    async typeConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.waitFor({ state: 'visible' });
        await this.confirmPassword.click();
        await this.confirmPassword.fill(confirmPassword);
    }

    async clearValueInConfirmPassword() {
        await this.confirmPassword.waitFor({ state: 'visible' });
        await this.confirmPassword.click();
        await this.confirmPassword.clear();
    }

    async typeBusinessName(businessName: string) {
        await this.businessName.waitFor({ state: 'visible' });
        await this.businessName.click();
        await this.businessName.fill(businessName);
    }

    async clearValueInBusinessName() {
        await this.businessName.waitFor({ state: 'visible' });
        await this.businessName.click();
        await this.businessName.clear();
    }

    async typeEmailAddress(emailAddress: string) {
        await this.emailAddress.waitFor({ state: 'visible' });
        await this.emailAddress.click();
        await this.emailAddress.fill(emailAddress);
    }

    async clearValueInEmailAddress() {
        await this.emailAddress.waitFor({ state: 'visible' });
        await this.emailAddress.click();
        await this.emailAddress.clear();
    }

    async clickSignUp() {
        await this.signUpButton.waitFor({ state: 'visible' });
        await this.signUpButton.click();
    }

    async clickSignIn() {
        await this.signInButton.waitFor({ state: 'visible' });
        await this.signInButton.click();
    }

    async clickTermsAndConditionsCheckbox() {
        await this.termsAndConditionsCheckbox.waitFor({ state: 'visible' });
        await this.termsAndConditionsCheckbox.check();
    }

    async verifyTermsAndConditionsErrorMessageIsVisible() {
        await expect(this.termsAndConditionsErrorMessage).toBeVisible();
    }

    async verifyElementsAreVisible() {
        await expect(this.carrierAssureLogo).toBeVisible();
        await expect(this.firstName).toBeVisible();
        await expect(this.lastName).toBeVisible();
        await expect(this.userName).toBeVisible();
        await expect(this.companyTypeDropdown).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.confirmPassword).toBeVisible();
        await expect(this.businessName).toBeVisible();
        await expect(this.emailAddress).toBeVisible();
        await expect(this.termsAndConditionsCheckbox).toBeVisible();
        await expect(this.termsAndConditionsLabel).toBeVisible();
        await expect(this.signUpButton).toBeVisible();
        await expect(this.signInButton).toBeVisible();
    }

    async verifyErrorMessageInElementsIsVisible(verifyCompanyType: boolean) {
        await expect(this.carrierAssureLogo).toBeVisible();
        await expect(this.firstNameErrorMessage).toBeVisible();
        await expect(this.lastNameErrorMessage).toBeVisible();
        await expect(this.userNameErrorMessage).toBeVisible();
        if (verifyCompanyType) {
            await expect(this.companyTypeDropdownErrorMessage).toBeVisible();
        }
        await expect(this.passwordErrorMessage).toBeVisible();
        await expect(this.confirmPasswordErrorMessage).toBeVisible();
        await expect(this.businessNameErrorMessage).toBeVisible();
        await expect(this.emailAddressErrorMessage).toBeVisible();
        await expect(this.termsAndConditionsErrorMessage).toBeVisible();
        await expect(this.signUpButton).toBeVisible();
        await expect(this.signInButton).toBeVisible();
    }

}
