class CareersPage {

    get openPositionsLink() {return $('[href="#positions"]')}
    get businessSystemsPos() {return $('.text-left=Business Systems')}
    get engineeringPos() {return $('.text-left=Engineering')}
    get financePos() {return $('.text-left=Finance')}
    get humanResourcesPos() {return $('.text-left=Human Resources')}
    get legalPos() {return $('.text-left=Legal')}
    get marketingPos() {return $('.text-left=Marketing')}
    get operationsPos() {return $('.text-left=Operations')}
    get productPos() {return $('.text-left=Product')}
    get salesPos() {return $('.text-left=Sales')}
    get securityPos() {return $('.text-left=Security')}
    get supportPos() {return $('.text-left=Support')}



    async openPositionsLinkClick() {
        await this.openPositionsLink.click()
    }
    

}
module.exports = new CareersPage ()