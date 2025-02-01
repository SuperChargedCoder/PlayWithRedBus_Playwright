class login {
    constructor(page) {
        this.page = page
        this.framespage = page.frameLocator(".modalIframe")
        this.mobileNumberTextBox = this.framespage.locator('#mobileNoInp')
        this.otpGenerator = this.framespage.locator("div[id='otp-container']")
        this.robotValidation = this.page.frameLocator('iframe.modalIframe').locator('text="I\'m not a robot"')
        // this.robotValidation = this.page.locator('iframe').nth(4).contentFrame().locator('iframe[name="a-8czgy51j4i6i"]').contentFrame().getByLabel('I\'m not a robot')
        this.successOTPMessage = this.framespage.getByText('To continue, please enter OTP sent to verify mobile number')
        this.resendOTP = this.framespage.getByRole('link', { name: 'resend Otp' })
        this.wrongMobileNumberErrorMessage = this.framespage.getByText('Please enter valid mobile number')
    }

    async MobileNumberTextBoxValue() {
        return await this.mobileNumberTextBox.textContent()
    }

    async EnterMobileNumber(phonenum) {
        return await this.mobileNumberTextBox.pressSequentially(phonenum, {delay: 100})
        
    }

    async OTPGeneratorButton() {
        return await this.otpGenerator
    }

    async RoboticValidation() {
        return await this.robotValidation
    }

    async OTPGenerationMessage() {
        return await this.successOTPMessage
    }

    async ResendOTPButton() {
        return await this.resendOTP
    }

    async MobileNumberValidationMessage() {
        return await this.resendOTP
    }

    async ClickOnCheckBox(){
        await this.robotValidation.click()
    }

    async ClickOnGenerateOTPButton(){
        await this.otpGenerator.click()
    }

}

module.exports = { login }