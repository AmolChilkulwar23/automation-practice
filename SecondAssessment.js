//const { text } = require('stream/consumers');
const { expect } = require('expect');
const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://dashboard.pantheon.io/login');
    const logIn = await browser.$("#auth0login");
    //console.log(logIn)
    await logIn.click()

    const inputmail = await browser.$("input[name='email']");
    //console.log(inputmail);
    await inputmail.waitForDisplayed({ timeout: 100000 });
    await inputmail.setValue("tt2730655@gmail.com");
    const inputpassword = await browser.$("input[name='password']");//
    await inputpassword.waitForDisplayed({ timeout: 100000 });
    await inputpassword.setValue("ZXCVbnm@#$%^1");

    const submit = await browser.$("button[name='submit']");
    await submit.click();

    const try_new_dashboard_button = await browser.$("//button[.='Try the New Dashboard']");//
    await try_new_dashboard_button.waitForDisplayed({ timeout: 1000000});
    await try_new_dashboard_button.isClickable();

    const create_new_site = await browser.$("//a[.='Create New Site']");//
    //await try_new_dashboard_button.waitForDisplayed({ timeout: 50000});
    await create_new_site.isEnabled();

    
    // const serachField = await browser.$('#downshift-0-input');
    // await serachField.waitForDisplayed({ timeout: 30000 });

    // await expect(serachField).toBeDisplayed();
    //const checktext = browser.$("//span[text()='test Auto']")
    
    const testButton = await browser.$("//button[.='test']");
    //await testButton.waitForDisplayed({ timeout: 100000 });
    await testButton.click();

    const logout = await browser.$("a[href='/logout']") 
    await logout.click();
    
    await browser.deleteSession() 
})()