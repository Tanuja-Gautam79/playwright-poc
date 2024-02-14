import { Page, expect } from "@playwright/test";
export default class verificationMethods {

    constructor(public page: Page) { }
    async  verifyTransferDetail(data: { transferfrom: string; transferto: string; amount: string; }) {
        await expect(this.page.locator('#qbf-conf')).toContainText(`Transfer of $100.00 from ${data.transferfrom} account to ${data.transferto} has been initiated. Your updated total balance is `);
        await expect(this.page.locator('#sub-qb')).toContainText('Go to Account Summary');
      }
      

}