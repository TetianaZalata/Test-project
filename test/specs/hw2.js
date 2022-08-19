const assert = require('assert')

const APIurl = 'https://v5.webdriver.io/docs/api.html'
const JSONurl = '//*[text()="JSONWire protocol"]'
const wikiElemTag = 'strong a[href="/SeleniumHQ/selenium/wiki"]'
const elemAPIDocs = '.postHeaderTitle'
const TwitterelemTag = '[href="https://twitter.com/webdriverio"]'
const helpButtonTag = 'li a[href="/help.html"]'

describe('HOME WORK2 webdriver.io page', () => {

    it('hometask2-1 should open a new tab', async () => {
        await browser.url(APIurl)
        console.log(await browser.getTitle()) 
        const link = await $(JSONurl).getAttribute("href");
        await browser.newWindow(link)
    })
    it('hometask2-2 should detect if a wiki element is displayed', async () => {
        let wikiElem = await $(wikiElemTag);
        let isDisplayed = await wikiElem.isDisplayed();
        console.log(isDisplayed);
    })
    it('hometask2-3 should switch to another window', async () => {
        await browser.switchWindow(APIurl)
    })

    it('hometask2-4 should wait until text has changed', async () => {
        await browser.waitUntil(
        async () => (await $(elemAPIDocs).getText()) === 'API Docs',
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );
    });
    it('hometask2-5 should save a screenshot of the browser view', async () => {
        await browser.saveScreenshot('elemAPIDocsscreenshot.png');
    });
    it('hometask2-6 should detect if a Twitter element is displayed', async () => {
        let Twitterelem = await $(TwitterelemTag);
        let isDisplayed2 = await Twitterelem.isDisplayed();
        console.log(isDisplayed2);
    })
    it('hometask2-7 should detect if a Twitter element is visible', async () => {
        let isDisplayedInViewport = await $(TwitterelemTag).isDisplayedInViewport();
        console.log(isDisplayedInViewport);
    })
    it('hometask2-8 should demonstrate the scrollIntoView command', async () => {
        const elemTwitter = await $(TwitterelemTag);
        await elemTwitter.scrollIntoView();
    });
    it('hometask2-9 should detect if a Twitter element is displayed after scroll', async () => {
        let Twitterelem = await $(TwitterelemTag);
        let isDisplayed2 = await Twitterelem.isDisplayed();
        console.log(isDisplayed2);
    })
    it('hometask2-10 should detect if a Twitter element is visible after scroll', async () => {
        let isDisplayedInViewport = await $(TwitterelemTag).isDisplayedInViewport();
        console.log(isDisplayedInViewport);
    })
    it('hometask2-11 should detect the focus of the Help element', async () => {
        const helpButton = await $(helpButtonTag);
        console.log(await helpButton.isFocused());
    })
    it('hometask2-12 should click on Help element and detect the focus of the Help element', async () => {
        const helpButton = await $(helpButtonTag);
        await helpButton.click();
        console.log(await helpButton.isFocused());
    })
})   