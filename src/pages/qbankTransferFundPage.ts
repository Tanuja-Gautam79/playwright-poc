import { Page } from "@playwright/test";
export default class qbankTransferFundPage {

    constructor(public page: Page) { }

    async selectTransferFrom(transferFrom: string) {
        await this.page.getByLabel('Transfer from').selectOption(transferFrom);
    }

    async selectTransferTo(transferTo:string) {
        await this.page.getByLabel('Transfer to').selectOption(transferTo);
    }
    async enterAmount(amount: string) {
        await this.page.getByLabel('Amount ($)').click();
        
        await this.page.getByLabel('Amount ($)').fill(amount);
    }
    async enterDateOfTransfer() {

        await this.page.getByLabel('Date of Transfer').press('Tab');
    }
    async enterMemo(memoTxt: string) {
        
        await this.page.getByLabel('Memo').fill(memoTxt);
    }
    async clickSubmit() {
        await this.page.waitForSelector('#sub-qb', { state: 'visible' });
        // Scroll to a specific element
        const element = await this.page.$('#sub-qb');
        if (element) {
        await element.scrollIntoViewIfNeeded();
        }
        await this.page.click('#sub-qb');
    }
}