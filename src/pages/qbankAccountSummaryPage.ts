import { Page } from "@playwright/test";
export default class qbankAccountSummaryPage {

    constructor(public page: Page) { }

    

    async clickMakeATransferBtn() {
        const makeATransferlnk = await this.page.waitForSelector('//*[@id="make-a-trans-btn"]');
        await this.page.getByText('Make a Transfer').click();
    }

    
}