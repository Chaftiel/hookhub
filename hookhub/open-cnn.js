const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({
    headless: false // Open visible browser
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to CNN.com
  await page.goto('https://www.cnn.com');

  console.log('CNN.com opened successfully!');
  console.log('Browser will stay open. Close it manually when done.');

  // Keep the browser open (don't close automatically)
  // await browser.close();
})();
