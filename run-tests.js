const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', msg => console.log('PAGE error:', msg));
  await page.goto('http://localhost:9000');
  await page.evaluate(() => {
    return new Promise(resolve => {
      runner.on('end', () => {
        const { stats } = runner;
        console.log(`ran ${stats.tests} tests in ${stats.duration}ms.`);
        console.log(`${stats.passes} passed, ${stats.failures} failed.`);
        resolve();
      });
    });
  });

  await browser.close();
})();
