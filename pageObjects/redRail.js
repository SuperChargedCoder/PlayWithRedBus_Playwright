class redRail {

    constructor(page) {
        this.page = page
        this.searchTrainsButton = page.getByRole('button', { name: 'search trains' })
        this.checkPNRStatusToggler = page.getByText("Check PNR Status")
        this.liveTrainStatusToggler = page.getByText("Live Train Status").first()
        this.switchToFrom = page.locator(".exchange-icon")
        this.travelSource = page.locator(".search-input").first()
        this.travelDestination = page.locator(".search-input").last()
        this.stationCode = page.locator(".stn_code")
    }

    async SwitchToCheckPNRStatus() {
        await this.checkPNRStatusToggler.click()
    }

    async SwitchToLiveTrainStatus() {
        await this.liveTrainStatusToggler.click()
    }

    async SetSourchAndDestination(travelSource, travelDestination) {
        await this.travelSource.click()
        await this.travelSource.fill(travelSource)
        await this.stationCode.getByText(travelSource).click()
        await this.travelDestination.click()
        await this.travelDestination.fill(travelDestination)
        await this.stationCode.getByText(travelDestination).click()
    }

    async ClickSearchTrains() {
        await this.page.waitForTimeout(3000)
        await this.searchTrainsButton.click()
        await this.page.waitForTimeout(1000)
    }

    async SwitchSourchAndDestination() {
        await this.switchToFrom.click()
        await this.page.waitForTimeout(2000)
    }

    async GetTravelSourch() {
        return await this.travelSource.getAttribute('value')
    }

    async GetTravelDestination() {
        return await this.travelDestination.getAttribute('value')
    }

    async GetAllerMessage() {
        // return await this.page.waitForEvent('dialog', dialog => dialog.message())
        // await this.page.on('dialog', dialog => {
        //     console.log(`Dialog message: ${dialog.message()}`);
        //     dialog.dismiss().catch(() => { });
        // })
        await console.log("No Allert In Automated Window. This scenario need to be reviwed")
    }

}
module.exports = { redRail }