class EnterpriseServerPage {

    get enterpriseName() {return $('[class="form-control form-control-mktg width-full"][name="contact_request[name]"]')}
    get enterpriseCompany() {return $('[class="form-control form-control-mktg width-full"][name="contact_request[organization_name]"]')}
    get enterpriseWorkEmail() {return $('[class="form-control form-control-mktg width-full js-business-email"]')}
    get enterprisePhone() {return $('[name="contact_request[phone]"]') }
   get radioButtonAzure() {return $('.text-normal=Deploy GitHub on Microsoft Azure')}
   get yesRadioButton() {return $('[id="questions_yes"]') }
   get acceptCheckbox() {return $('[class="js-tou-checkbox tou-checkbox"]')}
   get textareaInput() {return $('[class="form-control form-control-mktg"]')}

    async setEnterpriseName (value) {
       await this.enterpriseName.addValue('Tetiana')
    }

    async setenterpriseCompany (value) {
       await this.enterpriseCompany.addValue('TATIANA Z')
    }
    async setenterpriseWorkEmail (value) {
       await this.enterpriseWorkEmail.addValue('jsdgjsf@dkgh.sl')
    }
    async setenterprisePhone(value) {
        await this.enterprisePhone.addValue('123456789')
    }
   async radioButtonAzureclick() { 
      await this.radioButtonAzure.click();
   }
   async yesRadioButtonClick() { 
      await this.yesRadioButton.click();
   }
   async acceptCheckboxClick() { 
      await this.acceptCheckbox.click();
   }
   async textareaInputText(value) {
        await this.textareaInput.addValue('Hello')
    }
}

module.exports = new EnterpriseServerPage ()