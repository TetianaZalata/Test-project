const assert = require('assert')

describe('webdriver.io page', () => {
    xit('should have the right title', async () => {
        await browser.url('https://v5.webdriver.io/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})


 it('hometask1', async () => {
     await browser.url('https://v5.webdriver.io/');
     const APIButton = $('li a[href="/docs/api.html"]');
     await browser.pause(2000);
     await APIButton.click()
     await browser.pause(2000);
     await browser.url('https://v5.webdriver.io/docs/api.html');
     console.log('The urs is: https://v5.webdriver.io/docs/api.html')
     const API = await $(".postHeaderTitle");
     console.log('Text for element:' + await API.getText());
     await browser.url('https://v5.webdriver.io/docs/api.html');
     const input = await $('//*[text()="JSONWire protocol"]');
     let attr = await input.getAttribute('href')
     console.log("Href attribute is:" + await attr);
     await browser.url('https://v5.webdriver.io/docs/api.html');
     let input2 = await $('#search_input_react')
     await input2.setValue('test is ')
     await browser.pause(5000);
     await input2.addValue('DONE!')
     await browser.pause(5000);

     value = await input2.getValue()
     assert(value==='test is DONE!') // true
    




    })
    