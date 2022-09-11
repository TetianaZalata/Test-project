const assert = require('assert')

const loginUrl = 'https://github.com/login'
const homeUrl = 'https://github.com/'
const SighInButtonTag = '[class="btn btn-primary btn-block js-sign-in-button"]'

const errorMesTag = '[class="px-2"]'
const GitHubMarkTag = '[class="octicon octicon-mark-github"]'
const TwitterelemTag = '[src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg"]'
const ContactSalesTag = '[class="btn-mktg btn-subtle-mktg"]'
const ProductElemTag =  `//summary[contains(text(),'Product')]`

    describe('HOME WORK3 GitHub page', () => {
    
        it('hometask3-1 Verify ability of user  to sign in to GitHub with not valid credentials (Empty fields)', async () => {
            await browser.url(loginUrl);
            const SighInButton = await $(SighInButtonTag)
            await browser.pause(2000);
            await SighInButton.click();
            await browser.pause(2000);
        });
        
        it('hometask3-2 should wait until text has changed', async () => {
            const elem = await $(errorMesTag)
            await elem.waitUntil(async function () {
            return (await this.getText()) === 'Incorrect username or password.'
        }, {
        timeout: 5000,
        timeoutMsg: 'Incorrect username or password.'
         });
        });
        it('hometask3-3 Verify  GitHub logo on the login page is clickable', async () => {
            const GitHubMark = await $(GitHubMarkTag)
            await GitHubMark.click()
            await browser.pause(2000)
            await browser.url(homeUrl);
        });
        it('hometask3-4 Verify the  element “Product” in the header is visible on the display', async () => {
            let ProductElem = await $(ProductElemTag);
            let isDisplayed = await ProductElem.isDisplayed();
         });
        it('hometask3-5 Scroll to Twitter logo on the footer', async () => {
            const elemTwitter = await $(TwitterelemTag);
            await elemTwitter.scrollIntoView();
            await browser.pause(2000) 
        });
        it('hometask3-6 Verify  Twitter logo on the footer is clickable', async () => {
            const elemTwitter = await $(TwitterelemTag);
            await elemTwitter.click()
            await browser.pause(2000)
        });
        it('hometask3-7 Verify the "Contact Sales" button  is visible', async () => {
            await browser.url(homeUrl);
            await browser.pause(2000)
            let ContactSales = await $(ContactSalesTag).isDisplayed();
        
        });
        it('hometask3-8 Verify the "Contact Sales" button is clickable', async () => {
            let ContactSales = await $(ContactSalesTag);
            await ContactSales.click()
            await browser.pause(2000)
        });
    

})
