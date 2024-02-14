import { test, expect } from '@playwright/test';

import LoginPage from "../src/pages/qbankLoginPage"
import TranferFundPage from "../src/pages/qbankTransferFundPage"
import AccountSummaryPage from "../src/pages/qbankAccountSummaryPage"
import VerificationMethod  from "../src/utils/varificationMethods"
import testdata from "../test-data/testdata.json"


const { baseUrl, useraccount, password} = process.env;
test.describe('make a transfer on qbank app', async () => 
{
  for (const data of testdata)
  {
    test(`test qank login - Transfer from ${data.transferfrom} to ${data.transferto}`, async ({ page }) => {
        const login = new LoginPage(page);
        
      
      
        if (!baseUrl || !useraccount || !password) {
            throw new Error('Environment variables are not properly set.');
        }

        await page.goto(baseUrl);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        login.loginqbank(useraccount,password);


        const accountSummaryPage = new AccountSummaryPage(page);
      
        accountSummaryPage.clickMakeATransferBtn();
        await page.waitForTimeout(5000);
        const transferFundPage = new TranferFundPage(page);
        transferFundPage.selectTransferFrom(data.transferfrom);
        transferFundPage.selectTransferTo(data.transferto);
        transferFundPage.enterAmount(data.amount);
        transferFundPage.enterDateOfTransfer();
        transferFundPage.enterMemo('test memo');
        transferFundPage.clickSubmit();
        await page.waitForTimeout(10000);
        const verificationMethod = new VerificationMethod(page);
        await verificationMethod.verifyTransferDetail(data);
    })
  }
})

// async function verifyTransferDetail(page, data: { transferfrom: string; transferto: string; amount: string; }) {
//   await expect(page.locator('#qbf-conf')).toContainText(`Transfer of $100.00 from ${data.transferfrom} account to ${data.transferto} has been initiated. Your updated total balance is `);
//   await expect(page.locator('#sub-qb')).toContainText('Go to Account Summary');
// }
