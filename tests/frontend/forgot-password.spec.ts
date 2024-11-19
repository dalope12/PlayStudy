import { ForgotPassword } from '../../pages/forgot-password-page'
import { BaseTest } from "../BaseTest"

let forgotPassword: ForgotPassword;

test.beforeEach(async ({ page }) => {
    forgotPassword = new ForgotPassword(page);

    await page.goto('/');
})

test.afterEach(async ({ page }) => {
    await page.close();
});

test('Forgot Password -> Verify elements displayed.',
    { tag: ['@smoke', '@regression', '@prod'] }, async ({ page }) => {
        await signIn.verifyElementsAreVisible();
        await header.verifyGoToHomeIsVisible();

        await signIn.clickForgotPassword();
        await expect(page).toHaveURL('/forgot-password');

        await forgotPassword.verifyElementsAreVisible();
        await forgotPassword.clickSend();
        await forgotPassword.verifyErrorMessageInElementIsVisible();
        await forgotPassword.clickGoBack();

        await expect(page).toHaveURL('/sign-in');
        await signIn.verifyElementsAreVisible();
        await signIn.clickForgotPassword();
        await expect(page).toHaveURL('/forgot-password');

        await forgotPassword.clickSignUp();
        await expect(page).toHaveURL('/sign-up');
        await signUp.verifyElementsAreVisible();
    })
