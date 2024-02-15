import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
 
  timeout: 60 * 1000 * 5,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
}], ["html", {
    open: "never"
}],["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    headless: false,
    screenshot: "on",
    video: "on",
        
  },

  /* Configure projects for major browsers */
  projects: [
   
    {
      name: "chrome",
      use: {
          ...devices["Desktop Chrome"]
      }
  }
  ],

  
});
