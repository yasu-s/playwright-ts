import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://github.com/yasu-s/playwright-ts');
  await page.screenshot({ path: './dist/screenshot.png' });
  await browser.close();
})();
