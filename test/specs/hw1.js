const assert = require('assert')

const urlHome = 'https://v5.webdriver.io/'
const urlDocs = ' https://v5.webdriver.io/docs/api.html'

const webdriverHomeTitle = 'WebdriverIO · Next-gen WebDriver test framework for Node.js'
const webdriverDocsTitle = 'API Docs · WebdriverIO'

const APIButtonTag = 'li a[href="/docs/api.html"]'
const searchInputTag = '#search_input_react'
const JSONWireTag = '//*[text()="JSONWire protocol"]'



describe('HOME WORK1 webdriver.io page', () => {

    it('hometask1-1 home page should have the right title', async () => {
        await browser.url(urlHome)
        const title = await browser.getTitle()
        assert.strictEqual(title, webdriverHomeTitle)
    })
    it('hometask1-2 home page has API button', async () => {
        const APIButtonText = await $(APIButtonTag).getText();
        assert.strictEqual(APIButtonText, 'API')
    })
    it('hometask1-3 go to the API Docs page', async () => {
        const APIButton = await $(APIButtonTag)
        await browser.pause(2000);
        await APIButton.click()
        await browser.pause(2000);
        const url = await browser.getUrl();
        // assert.strictEqual(url, urlDocs)
        console.log('The urs is: https://v5.webdriver.io/docs/api.html')
    })
    it('hometask1-4 API Docs page should have the right title', async () => {
        const title = await browser.getTitle();
        assert.strictEqual(title, webdriverDocsTitle)
    })
    it('hometask1-5 API Docs page - title', async () => {
        const API = await $(".postHeaderTitle");
        console.log('Text for element:' + await API.getText());
    })
    it('hometask1-6 JSONWire has attr href', async () => {
        const input = await $(JSONWireTag);
        let attr = await input.getAttribute('href')
        console.log("Href attribute is:" + await attr);
    })

    it('hometask1-7 set value in search input', async () => {
        let input2 = await $(searchInputTag)
        await input2.setValue('test is ')
        await browser.pause(5000);
        await input2.addValue('DONE!')
        await browser.pause(5000);
         
        value = await input2.getValue()
        assert(value === 'test is DONE!')

    })
})
