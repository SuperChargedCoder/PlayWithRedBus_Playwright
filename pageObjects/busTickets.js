class busTickets {
    constructor(page) {
        this.page = page
        this.languageDropdown = page.locator("#language_change")
        this.languageMenu = page.locator(".header_dropdown_menu").first()
        this.scrollToTopButton = page.locator(".scrollTopButton")
        this.searchBusesButton = page.locator("#search_button")
        this.accountDropDown = page.locator(".name_rb_secondary_item").last()
        this.login = page.locator("#user_sign_in_sign_up")
    }

    async ClickOnDropDown() {
        await this.languageDropdown.click()
    }

    async CheckForLanguageVisiblity(language) {
        return await this.languageMenu.getByText(language)
    }

    async ScrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth', // Enables smooth scrolling
            });
        })
    }

    async ClickOnScrollTop() {
        await this.scrollToTopButton.click()
    }

    async VisibilityOfSearchBusesButton() {
        return await this.searchBusesButton
    }

    async NevigateToLoginFrame(){
        await this.accountDropDown.click()
        await this.login.click()
        await this.page.waitForTimeout(1000)
    }

}
module.exports = { busTickets }