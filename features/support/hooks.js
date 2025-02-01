const { Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep, Status } = require('@cucumber/cucumber')
const playwright = require('@playwright/test')
const { PageObjectManager } = require('../../pageObjects/PageObjectManager')
const fs = require('fs');
const path = require('path');

const screenshotDir = path.join(__dirname, '../screenshotFailedScenarios');
if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}

Before({ tags: "@Train" }, async function () {
    const browser = await playwright.chromium.launch({
        headless: false,
        args: ['--start-maximized'],
    })
    const context = await browser.newContext({
        viewport: null, // Disable the default viewport
    })
    this.page = await context.newPage()
    await this.page.goto("https://www.redbus.in/railways")
    this.pom = new PageObjectManager(this.page)

})


Before({ tags: "@Bus" }, async function () {
    const browser = await playwright.chromium.launch({
        headless: false,
        args: ['--start-maximized'],
    })
    const context = await browser.newContext({
        viewport: null, // Disable the default viewport
    })
    this.page = await context.newPage()
    await this.page.goto("https://www.redbus.in/")
    this.pom = new PageObjectManager(this.page)

})

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED) {
        // await this.page.screenshot({path: 'FailedCucumberScreenShot.png'})
        console.log("Scenario Failed")
    }
})

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const scenarioName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Clean up name
        const screenshotPath = path.join(screenshotDir, `${scenarioName}.png`);
        await this.page.screenshot({ path: screenshotPath });
        console.log(`Screenshot captured for failed scenario: ${screenshotPath}`);
    }
    // Cleanup logic after each scenario (e.g., close the page)
    if (this.page) {
        await this.page.close();
    }
})