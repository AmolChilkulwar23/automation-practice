const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tt2730655@gmail.com', 'ZXCVbnm@#$%^1');
        //await LoginPage.createNewSite.waitForDisplayed({ timeout: 100000 });
        await expect(LoginPage.createNewSite).toBeExisting();
        await expect(LoginPage.migrateExistingSites).toBeExisting();
    });
});



