const { checkPNRStatus } = require('./checkPNRStatus')
const { liveTrainStatus } = require('./liveTrainStatus')
const { redRail } = require('./redRail')
const { busTickets } = require('./busTickets')
const { login } = require('./login')

class PageObjectManager {

    constructor(page) {
        this.page = page
        this.checkPNRStatusPage = new checkPNRStatus(this.page)
        this.liveTrainStatusPage = new liveTrainStatus(this.page)
        this.redRailPage = new redRail(this.page)
        this.busTicketsPage = new busTickets(this.page)
        this.loginPage = new login(page)
    }

    getRedRailPage() {
        return this.redRailPage
    }

    getliveTrainStatusPage() {
        return this.liveTrainStatusPage
    }

    getcheckPNRStatusPage() {
        return this.checkPNRStatusPage
    }

    getBusTicketsPage() {
        return this.busTicketsPage
    }

    getLoginPage(){
        return this.loginPage
    }

}
module.exports = { PageObjectManager }