class liveTrainStatus {

    constructor(page) {
        this.page = page
        this.enterTrainNameNumberBox = page.getByPlaceholder("Enter train name or number")
        this.checkStatusButton = page.locator(".button")
        this.searchWindow = page.locator(".lts_solr_wrap").first()
        this.searchHistoryWindow = page.locator(".recent_pnr_search_head")
        this.recentTrainName = page.locator(".recent_trainname").first()
        this.searchedTrainName = page.locator(".lts_header")
        this.refreshButton = page.locator(".refresh_btn")
        this.refreshMessage = page.locator(".fetch_latest")
        // this.trainRunningStatus = page.locator("div[class*='background']")
        this.trainRunningStatus = page.locator("//div[contains(@class, 'background') or contains(@class, 'blue_bckgnd')]")
        this.backToSearchPage = page.locator(".back_arr_img")
        this.disabledCheckPNRStatusButton = page.locator(".pnr_disabled1")
        this.lastUpdatedTime = page.locator(".lts_last_updated")
    }

    async EnterTrainNameOrNumberValue() {
        return await this.enterTrainNameNumberBox.inputValue()
    }

    async ClickOnSearch() {
        await this.checkStatusButton.click()
    }

    // async SearchButtonStatus() {
    //     const buttonStatus = await this.checkStatusButton.isDisabled();
    //     return buttonStatus
    // }

    async SearchForTrain(trainNumber) {
        await this.enterTrainNameNumberBox.fill(trainNumber)
        await this.searchWindow.click()
    }

    async SearchedTrainHeader() {
        return await this.searchedTrainName.textContent()
    }

    async TrainStatus() {
        return await this.trainRunningStatus.textContent()
    }

    async TrainStatusRefresh() {
        await this.refreshButton.click()
    }

    async RefreshMessage() {
        return await this.refreshMessage.textContent()
    }

    async NevigateBack() {
        await this.backToSearchPage.click()
    }

    async VisibilityOfSearchHistoryWindow() {
        return await this.searchHistoryWindow.isVisible()
    }

    async RecentTrainSearch() {
        return await this.recentTrainName.textContent()
    }

    async DisabledCheckPNRStatusButton() {
        return await this.disabledCheckPNRStatusButton
    }

    async LastUpdatedTime() {
        return await this.lastUpdatedTime.textContent()
    }

}
module.exports = { liveTrainStatus }