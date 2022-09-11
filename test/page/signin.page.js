class SigninPage {

    get username() {return $('[class="form-control input-block js-login-field"]')}
    get password() {return $('[name="password"]') }
    get submitBtn() {return $('[class="btn btn-primary btn-block js-sign-in-button"]')}
    get headerLinks() {return $('[href="https://github.com/"]')}
    get readmeBtn() {return $('[value="Create a README"]')}
    get avatarBtn() {return $('[class="avatar avatar-small circle"]')}
    get singoutBtn() {return $('[class="dropdown-item dropdown-signout"]')}
    

    async submit() {
        await this.submitBtn.click()
    }
    async submit1() {
        await this.readmeBtn.click()
    }
    
    async submit3() {
        await this.avatarBtn.click()
    }
    async submit4() {
        await this.singoutBtn.click()
    }

}
module.exports = new SigninPage ()