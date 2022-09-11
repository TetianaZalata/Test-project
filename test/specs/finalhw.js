const assert = require('assert')
const homePage = require('../page/home.page')
const signinPage = require('../page/signin.page')
const signupPage = require('../page/signup.page')
const forgotPasPage = require('../page/forgotpas.page')
const pricingPage = require('../page/pricing.page')
const searchPage = require('../page/search.page')
const trialPage = require('../page/trial.page')
const enterpriseServerPage = require('../page/enterpriseserver.page')
const careersPage = require('../page/careers.page')
const homeUrl = 'https://github.com/'
const enterpriseUrl = 'https://github.com/enterprise'
const loginUrl = 'https://github.com/login'
const signUpUrl = 'https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2Fenterprise&source=header'

 
describe('GIT HUB', () => {

it('should SIGN UP to allow access with correct creds', async () => {
        await browser.url(signUpUrl);
        await browser.pause(2000);
        
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(let ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
        }
        await signupPage.email.addValue(string + '@gmail.com')
        await browser.pause(2000);
        await signupPage.continue1();
        await signupPage.password.addValue('siXp333G24G')
        await browser.pause(2000); 
        await signupPage.continue2();
        await signupPage.userName.addValue('Zolotayakj')
        await signupPage.continue3();
        
    })
    it('should SIGN UP to down page', async () => {
        await browser.url(homeUrl);
        await browser.pause(2000);
        await homePage.signUpButtonClick();
        await browser.pause(2000);
        await signupPage.email.addValue('hftydsea3p@gmail.com')
        await browser.pause(2000);
        await signupPage.continue1();
        await signupPage.password.addValue('siXp333G24G')
        await browser.pause(2000); 
        await signupPage.continue2();
        await signupPage.userName.addValue('Zolotayakj')
        await signupPage.continue3();
    })
    it('Should SIGN IN with correct creds', async () => {
        await browser.url(loginUrl)
        await signinPage.username.setValue('uzytkowic@gmail.com')
        await signinPage.password.setValue('Supertesting1')
        await signinPage.submit();
        await browser.pause(2000);
    })
    it('Should verify your profile and Sign out', async () => {
        await signinPage.submit3();
        await browser.pause(2000);
        await signinPage.submit4();
    })
    it('Should clics FORGOT PASSWORD', async () => {
        await browser.url(loginUrl);
        await forgotPasPage.submit();
        await browser.pause(2000)
        await forgotPasPage.forgotEmailInput.addValue('djgfajhk@gmail.com');
        await browser.pause(2000);
    });

    it('HEADER ELEMENTS should be visible', async () => {
        await browser.url(homeUrl);
        await browser.maximizeWindow();
        await homePage.visible1();
        await homePage.visible2();
        await homePage.visible3();
        console.log('Is visible:' + await homePage.solutions.isDisplayed())
        console.log('Is visible:' + await homePage.openSource.isDisplayed())
        console.log('Is visible:' + await homePage.pricing.isDisplayed())
    });
    it('should MOUSEHOVER to Solutions, Open Source, Pricing Buttons', async () => {
        await homePage.solutionsMoveTo();
        await browser.pause(2000); 
        await homePage.openSourceMoveTo();
        await browser.pause(2000); 
        await homePage.pricingMoveTo();
        await browser.pause(2000); 
    });
    it('should clics PRICING Button', async () => {
        await homePage.priceclick();
        await browser.pause(2000); 
     });
    it('should clics JOIN FOR FREE Button and lets create your user account', async () => {
        await pricingPage.joinForFreeClick();
        await pricingPage.setUserName();
        await browser.pause(2000); 
        await pricingPage.setuserEmail();
        await pricingPage.setuserPassword();
        await browser.pause(2000);
    });
    it('should clics OPEN SOURCE and TOPICS Buttons', async () => {
        await homePage.openSourceClick();
        await browser.pause(2000); 
        await homePage.topicsclick();
        await browser.pause(2000); 
        console.log('Is topics is visible:' + await homePage.topics.isDisplayed())
    });
    it('should SEARCH WebdriverIO request', async () => {
        await homePage.search();
        await browser.pause(2000); 
        await browser.keys('Enter');
    });
    it ('should click to TYPE SCRIPT and go to first link', async () => {
        await searchPage.typeScriptClick();
        await browser.pause(2000); 
        await searchPage.firstLinkWebdriverClick();
        await browser.pause(2000); 
    });
    it ('should click to FREE TRIAL Button', async () => {
        await browser.url(enterpriseUrl);
        await browser.pause(2000); 
        await homePage.startFreeTrialclick();
        await browser.pause(2000); 
    });
    it ('should click to ENTERPRISE CLOUD', async () => {
        await trialPage.enterpriseCloudClick();
        await browser.pause(2000); 
    });
    it('LETS CREATE YOUR USER ACC', async () => {
        await pricingPage.setUserName();
        await browser.pause(2000); 
        await pricingPage.setuserEmail();
        await pricingPage.setuserPassword();
        await browser.back();
    });
     it ('should GO BACK to Trial Page and click to Enterprise Server+ fill in form', async () => {
        await trialPage.enterpriseServerClick();
        await enterpriseServerPage.setEnterpriseName();
        await enterpriseServerPage.setenterpriseCompany();
        await enterpriseServerPage.setenterpriseWorkEmail();
        await enterpriseServerPage.setenterprisePhone();
        await browser.pause(2000);
        await enterpriseServerPage.radioButtonAzureclick();
        await enterpriseServerPage.yesRadioButton.isSelected();
        await enterpriseServerPage.yesRadioButtonClick();
        await enterpriseServerPage.textareaInputText();
        await enterpriseServerPage.acceptCheckboxClick();
     });
    it('should go to home page and go to CAREERS', async () => {
        await browser.url(homeUrl);
        await homePage.careersLinkClick();
        await browser.pause(2000); 
        await careersPage.openPositionsLinkClick();
        console.log('Is displayed:' + await careersPage.businessSystemsPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.engineeringPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.financePos.isDisplayed())
        console.log('Is displayed:' + await careersPage.humanResourcesPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.legalPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.marketingPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.operationsPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.productPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.salesPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.securityPos.isDisplayed())
        console.log('Is displayed:' + await careersPage.supportPos.isDisplayed())

    });
})

