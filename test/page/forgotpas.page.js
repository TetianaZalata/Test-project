class ForgotPasPage {

    get forgotPasLink() {return $('[href="/password_reset"]')}
    get forgotEmailInput() {return $('[class="form-control input-block"]')}

    async submit() {
        await this.forgotPasLink.click()
    }
    async setEmail () {
       await this.forgotEmailInput.addValue()
    }

}
module.exports = new ForgotPasPage ()