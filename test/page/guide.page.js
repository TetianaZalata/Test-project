class GuidePage { 

    get editButton() {
        return $('.slidingNav [href="/docs/gettingstarted.html"]')
    }
    
    async clickEditButton () {
       await this.editButton.click()
    }
}

module.exports = new GuidePage  ()