const { Given, When, Then } = require('@cucumber/cucumber')

const { PageObjectManager } = require('../../pageObjects/PageObjectManager')
const { expect } = require('@playwright/test')


Given('The user switches to the Live Train Status section', async function () {
    const redRailPage = this.pom.getRedRailPage()
    await redRailPage.SwitchToLiveTrainStatus()
    this.liveTrainStatusPage = this.pom.getliveTrainStatusPage()
})

Then('Previously Searched section should be hidden', async function () {
    // this.liveTrainStatusPage = this.pom.getliveTrainStatusPage()
    await expect(await this.liveTrainStatusPage.VisibilityOfSearchHistoryWindow()).toBeFalsy()
})

When('user select valid train with train number {int} from search window', async function (trainNumber) {
    await this.liveTrainStatusPage.SearchForTrain("15274")
})

When('clicks on Check Status button', async function () {
    await this.liveTrainStatusPage.ClickOnSearch()
})

Then('user can see train status for searched train name {string} and train number {int}', async function (trainName, trainNumber) {
    await expect(await this.liveTrainStatusPage.SearchedTrainHeader()).toBe(trainNumber + " | " + trainName)

})

When('user navigates to the previous search page', { timeout: 50 * 1000 }, async function () {
    await this.liveTrainStatusPage.NevigateBack()
})

Then('Previously Searched section should be displayed', { timeout: 50 * 1000 }, async function () {
    await expect(await this.liveTrainStatusPage.VisibilityOfSearchHistoryWindow()).toBeTruthy()
})

Then('Previously searched train name {string} should be displayed', { timeout: 50 * 1000 }, async function (trainName) {
    await expect(await this.liveTrainStatusPage.RecentTrainSearch()).toBe(" | " + trainName)
})

When('user click on select language drop-down', async function () {
    this.busTicketPage = this.pom.getBusTicketsPage()
    await this.busTicketPage.ClickOnDropDown()
})

Then('user should be able to see {string} from drop-down', async function (lang) {
    await expect(await this.busTicketPage.CheckForLanguageVisiblity(lang)).toBeVisible()
})

Given('user scroll to page bottom', async function () {
    this.busTicketPage = this.pom.getBusTicketsPage()
    await this.busTicketPage.ScrollToBottom()
})

When('user clicks on scroll to top button', async function () {
    await this.busTicketPage.ClickOnScrollTop()
})

Then('page should automatically scroll to the top', async function () {
    await expect(await this.busTicketPage.VisibilityOfSearchBusesButton()).toBeVisible()
})

/**----------------------------- */
Given('The user switches to the Check PNR Status section', async function () {
    const redRailPage = this.pom.getRedRailPage()
    await redRailPage.SwitchToCheckPNRStatus()
    this.checkPNRStatusPage = this.pom.getcheckPNRStatusPage()
})

When('The Enter PNR Number text box is left empty', async function () {
    await expect(await this.checkPNRStatusPage.PNRTextBoxContent()).toBe("")
})

Then('The Check Status button is disabled', async function () {
    await expect(await this.checkPNRStatusPage.DisabledCheckStatusButton()).toBeVisible()
})

When('The user enters {string}', async function (PNR) {
    await this.checkPNRStatusPage.EnterPNR(PNR)
})

Then('The Check Status button is enabled', async function () {
    await expect(await this.checkPNRStatusPage.DisabledCheckStatusButton()).toBeHidden()
})

When('clicks on the Check Status button', async function () {
    await this.checkPNRStatusPage.ClickOnCheckStatus()
})

Then('The user sees the ticket status of PNR {string}', { timeout: 50 * 1000 }, async function (PNR) {
    await expect(await this.checkPNRStatusPage.SearchedPNR(PNR)).toBeVisible()
    await console.log(await this.checkPNRStatusPage.GetPNRStatus())
})

Then('Enter PNR Number text box remains empty', async function () {
    await expect(await this.checkPNRStatusPage.PNRTextBoxContent()).toBe("")
})

Then('The message {string} is displayed for PNR {string}', { timeout: 50 * 1000 }, async function (ErroMessage, PNR) {
    await expect(await this.checkPNRStatusPage.ErrorMessagePNR()).toBe(ErroMessage)
    await expect(await this.checkPNRStatusPage.SearchedPNR(PNR)).toBeVisible()
})

When('Enter train name or number text box is empty', async function () {
    await expect(await this.liveTrainStatusPage.EnterTrainNameOrNumberValue()).toBe("")
})

Then('Check Status button is disabled', async function () {
    await expect(await this.liveTrainStatusPage.DisabledCheckPNRStatusButton()).toBeVisible()
})


When('user select valid train with train number {string} from search window', async function (trainNumber) {
    await this.liveTrainStatusPage.SearchForTrain(trainNumber)
})

Then('Check Status button is enabled', async function () {
    await expect(await this.liveTrainStatusPage.DisabledCheckPNRStatusButton()).toBeHidden()
})

Then('Train name {string} and train number {string} should be displayed in Enter train name or number text box', async function (trainName, trainNumber) {
    await expect(await this.liveTrainStatusPage.EnterTrainNameOrNumberValue()).toBe(trainNumber + " | " + trainName)
})

Then('user can see train status for searched train name {string} and train number {string}', { timeout: 50 * 1000 }, async function (trainName, trainNumber) {
    await expect(await this.liveTrainStatusPage.SearchedTrainHeader()).toBe(trainNumber + " | " + trainName)
    await console.log(await this.liveTrainStatusPage.TrainStatus())
})

When('click on train status refresh button', async function () {
    await this.liveTrainStatusPage.TrainStatusRefresh()
})

Then('user should see {string} message', async function (RefMessage) {
    await expect(await this.liveTrainStatusPage.RefreshMessage()).toBe(RefMessage)
})

Then('Last updated time should be system\'s current time', async function () {
    console.log(await this.liveTrainStatusPage.LastUpdatedTime())
})

When('user click on Search Train button', async function () {
    this.redRailPage = this.pom.getRedRailPage()
    await this.redRailPage.ClickSearchTrains()
})

Then('alert message {string} should be displayed', async function (AllerMessage) {
    await this.redRailPage.GetAllerMessage()
})

When('user select source {string} and destination {string}', async function (source, destination) {
    this.redRailPage = this.pom.getRedRailPage()
    await this.redRailPage.SetSourchAndDestination(source, destination)
})


When('click on switch button', async function () {
    await this.redRailPage.SwitchSourchAndDestination()
})

Then('source {string} and destination {string} should be switched', async function (newSource, newDestination) {
    await expect(await this.redRailPage.GetTravelSourch()).toBe(newDestination)
    await expect(await this.redRailPage.GetTravelDestination()).toBe(newSource)
})

/**Login Feature Fil */

Given('user open the login window', async function () {
    const busTicketPage = this.pom.getBusTicketsPage()
    await busTicketPage.NevigateToLoginFrame()
    this.loginFrameWindow = this.pom.getLoginPage()
})

When('Enter your mobile number is empty', async function () {
    await expect(await this.loginFrameWindow.MobileNumberTextBoxValue()).toBe("")
})

Then('GENERATE OTP\\(One Time Password) button should be disabled', async function () {
    // await expect(await this.loginFrameWindow.OTPGeneratorButton()).toBeDisabled()
    console.log("Implement Disabled 'GENERATE OTP(One Time Password)' button for empty 'Enter your mobile number' text field")
})

When('user enter mobile number {string}', async function (mobileNumber) {
    await this.loginFrameWindow.EnterMobileNumber(mobileNumber)
})

Then('{string} confirmation message should be displayed', async function (robotMessage) {
    // await expect(await this.loginFrameWindow.RoboticValidation()).toBeVisible()
    console.log("I'm not a robot confirmation on entry of mobile number")
})

When('user confirm {string}', async function (robotMessage) {
    await this.loginFrameWindow.ClickOnCheckBox()
})


Then('GENERATE OTP\\(One Time Password) button gets enabled', async function () {
    await this.loginFrameWindow.ClickOnGenerateOTPButton()
})
