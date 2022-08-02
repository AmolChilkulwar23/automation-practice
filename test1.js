const { remote } = require('webdriverio');

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooginhydr1-21%26ref%3Dnav_ya_signin%26adgrpid%3D55759171661%26hvpone%3D%26hvptwo%3D%26hvadid%3D611438704220%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D8566486995353463008%26hvqmt%3Db%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9062093%26hvtargid%3Dkwd-298479560553%26hydadcr%3D5840_2359610%26gclid%3DCj0KCQjw0JiXBhCFARIsAOSAKqA6RwTqPh8y8aeuboKrT4hwG78GHFUnMd8iPgMQKbjVH5d1zcsrpKQaAlxTEALw_wcB&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')

    const idLink = await browser.$("#ap_email");
    //console.log(idLink);
    await idLink.setValue("amol23chilkulwar@gmail.com")
    const nextButton = await browser.$("#continue")
    await nextButton.click()
    // await apiLink.click()

    // await browser.saveScreenshot('./screenshot.png')
    //await browser.deleteSession() 
})()