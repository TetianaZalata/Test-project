class TrialPage {

    get enterpriseCloud() {return $('.mb-1=Enterprise Cloud')}
    get enterpriseServer() {return $('.mb-1=Enterprise Server')}

    async enterpriseCloudClick() {
        await this.enterpriseCloud.click()
    }
    async enterpriseServerClick() {
        await this.enterpriseServer.click()
     }

}

module.exports = new TrialPage ()