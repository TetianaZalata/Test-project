class SignupPage {

    get email() {return $('[id="email"]') }
    get continueBtn1() {return $('[data-optimizely-event="click.signup_continue.email"]')}
    get password() {return $('[id="password"]') }
    get continueBtn2() {return $('[data-continue-to="username-container"]')} 
    get userName() {return $('[name="user[login]"]') }
    get continueBtn3() {return $('[data-optimizely-event="click.signup_continue.username"]')}
    get optInField() {return $('[name="opt_in"]') }
    get continueBtn4() {return $('[data-optimizely-event="click.signup_continue.opt-in"]')}




    async continue1 () {
        await this.continueBtn1.click()
    }
 async continue2 () {
        await this.continueBtn2.click()
 }
    async continue3 () {
        await this.continueBtn3.click()
    }
    async continue4 () {
        await this.continueBtn4.click()
    }
}

module.exports = new SignupPage ()