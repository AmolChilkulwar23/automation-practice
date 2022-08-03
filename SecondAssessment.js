//const { text } = require('stream/consumers');
const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://dashboard.pantheon.io/login');
    const logIn = await browser.$("#auth0login");
    console.log(logIn)
    await logIn.click()

    const inputmail = await browser.$("//input[@id='1-email']");
    await inputmail.waitForDisplayed({ timeout: 10000 });
    await inputmail.setValue("tt2730655@gmail.com");
    const inputpassword = await browser.$("//input[@id='1-password']");
    await inputpassword.waitForDisplayed({ timeout: 5000 });
    await inputpassword.setValue("ZXCVbnm@#$%^1");

    const submit = await browser.$("//*[@id='1-submit']");
    await submit.click();
    
    const checktext = browser.$("//span[text()='test Auto']")
    await checktext.waitForDisplayed({ timeout: 10000 });
    const tagName = await checktext.getTagName();
    console.log(tagName);
   
    await browser.deleteSession() 
})()