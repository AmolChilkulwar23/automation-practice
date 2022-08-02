const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')

    const idLink = await browser.$("#identifierId");
    //console.log(idLink);
    await idLink.setValue("amol.chilkulwar@pantheon.io")
    const nextButton = await browser.$("#identifierNext")
    await nextButton.click()
    // await apiLink.click()

    // await browser.saveScreenshot('./screenshot.png')
    //await browser.deleteSession() 
})()