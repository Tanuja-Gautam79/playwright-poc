import { Page } from "@playwright/test";
export default class qbankLoginPage {

    constructor(public page: Page) { }

    async loginqbank(username: string, password: string) {

        await this.enterUser(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    
    }

    async enterUser(username: string) {
        
        await this.page.fill('input[placeholder="Username"]', username);
        await this.page.press('input[placeholder="Username"]', 'Tab');

    }

    async enterPassword(password: string) {
        await this.page.fill('input[placeholder="Password"]', password);
        await this.page.press('input[placeholder="Password"]', 'Tab');
    }

    async clickLoginBtn() {
        await this.page.waitForSelector('button.qb-signin-button[type="submit"]', { state: 'visible' });
        // await page.waitForSelector('button.qb-signin-button[type="submit"]', { state: 'enabled' });
        await this.page.click('button.qb-signin-button[type="submit"]');
        await this.page.waitForTimeout(5000);
        
        await this.page.waitForLoadState('networkidle');
    }
}