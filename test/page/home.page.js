class HomePage {

    get solutions() {return $('.HeaderMenu-link=Solutions')}
    get openSource() {return $('.HeaderMenu-link=Open Source')}
    get pricing() {return $('.HeaderMenu-link=Pricing')}
    get plans() { return $("//*[contains(text(),'Plans') and@href and@class]")}
    get topics() {return $('[href="/topics"]') }
    get searchInput() {return $('[placeholder="Search GitHub"]')}
    get startFreeTrial() {return $('[href="/organizations/enterprise_plan?ref_cta=Start+a+free+trial&ref_loc=hero&ref_page=%2Fenterprise"]')}
    get enterpriseCloud() {return $('.mb-1=Enterprise Cloud')}
    get careersLink() {return $('[href="/about/careers"]')}
    get signUpButton() {return $('[href="/signup?ref_cta=Sign+up+for+GitHub&ref_loc=footer+launchpad&ref_page=%2F"]')}
    

    async signUpButtonClick() {
        await this.signUpButton.click()
    }
    async signUpButtonScroll(){
        await this.signUpButton.scrollIntoView()
    }

    async priceclick() {
        await this.pricing.click()
    }
    async openSourceClick () {
        await this.openSource.click()
    }
    async topicsclick() { 
        await this.topics.click()
    }
    async visible1() { 
        await this.solutions.isDisplayed()
    }
     async visible2() { 
        await this.openSource.isDisplayed()
     }
     async visible3() { 
        await this.pricing.isDisplayed()
    }
    async solutionsMoveTo() {
        await this.solutions.moveTo()
    }
    async openSourceMoveTo() {
        await this.openSource.moveTo()
    }
    async pricingMoveTo() {
        await this.pricing.moveTo()
    }
    async search() {
      await this.searchInput.addValue('WebdriverIO')
    }
    async startFreeTrialclick() {
        await this.startFreeTrial.click()
    }
    async careersLinkClick() { 
        await this.careersLink.click()
    }
    

}

module.exports = new HomePage ()