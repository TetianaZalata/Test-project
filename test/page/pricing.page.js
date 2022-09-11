class PricingPage {

    get joinForFreeBtn() {return $('[class="btn-mktg d-block btn-muted-mktg"]')}
    get userNameInput() {return $('[class="form-control input py-1"][name="user[login]"]')}
    get emailAddressInput() {return $('dd [name="user[email]"]')}
    get passwordInput() {return $('dd [name="user[password]"]') }
    get createAccBtn() {return $('[class="btn btn-primary btn-large signup-btn  js-octocaptcha-form-submit width-full"]')}
    

    async joinForFreeClick () {
        await this.joinForFreeBtn.click()
    }

    async setUserName (value) {
       await this.userNameInput.addValue('Teriheg')
    }

    async setuserEmail (value) {
       await this.emailAddressInput.addValue('tysdryysd@gmail.com')
    }
    async setuserPassword (value) {
       await this.passwordInput.addValue('Rtskgshi123')
    }

    async createAccount () {
        await this.createAccBtn.click()
    }
   

    

}

module.exports = new PricingPage ()