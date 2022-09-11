class SearchPage {

    get typeScript() {return $('[href="/search?q=webdriverio&type=Repositories"]')}
    get firstLinkWebdriver() {return $('.v-align-middle=webdriverio/')}
    

    async typeScriptClick () {
        await this.typeScript.click()
    }
    async firstLinkWebdriverClick() { 
        await this.firstLinkWebdriver.click()
    }

}

module.exports = new SearchPage ()