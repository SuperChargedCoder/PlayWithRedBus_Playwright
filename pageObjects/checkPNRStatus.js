class checkPNRStatus {

    constructor(page) {
        this.page = page
        this.enterPNRTextBox = page.getByPlaceholder("Enter PNR Number")
        this.checkStatusButton = page.getByRole('button', { name: 'Check Status' })
        this.pnrStatus = page.locator(".ris_pnr_overall_status")
        this.pnrErrorMessage = page.locator(".err_main_header").first()
        this.disabledCheckStatusButton = page.locator(".pnr_disabled1")
    }

    async EnterPNR (pnrNumber){
        await this.enterPNRTextBox.fill(pnrNumber)
    }

    async ClickOnCheckStatus (){
        await this.checkStatusButton.click()
    }

    async SearchedPNR(PNR){
        return await this.page.getByText(PNR)
    }

    async GetPNRStatus(){
        return await this.pnrStatus.textContent() 
    }

    async ErrorMessagePNR (){
        return await this.pnrErrorMessage.textContent() 
    }

    async DisabledCheckStatusButton (){
        return await this.disabledCheckStatusButton
    }

    async PNRTextBoxContent () {
        return await this.enterPNRTextBox.inputValue()
    }

}
module.exports = { checkPNRStatus }