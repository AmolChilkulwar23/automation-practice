

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get loginButton ()  {
        return $('#auth0login')
    }
    get inputUsername () {
        return $('input[name="email"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('button[name="submit"]');
    }

    get createNewSite () {
        return $("a[href='/sites/create']");
    }
    
    get migrateExistingSites () {
        return $("a[href$='/sites/migrate']");
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username , password ) {
        await this.loginButton.click();
        await this.inputUsername.waitForDisplayed({ timeout : 100000});
        console.log(this.inputUsername);
        await this.inputUsername.setValue(username);
        //await this.inputUsername.waitForDisplayed({ timeout: 100000 });
        await this.inputPassword.setValue(password);
        //await this.inputPassword.waitForDisplayed({ timeout: 5000 });
        await this.btnSubmit.click();
        await this.createNewSite.waitForDisplayed({ timeout: 100000 });
        // //console.log(this.createNewSite);
        // await expect(this.createNewSite).toBeExisting();
        // //console.log(this.migrateExistingSites);
        // await expect(this.migrateExistingSites).toBeExisting();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
