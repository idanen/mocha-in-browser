const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  console.log('navigating');
  // const pageContent = await new Promise(resolve => fs.readFile('./index.html', 'utf-8', (err, data) => resolve(data)));
  // console.log(pageContent);
  // await page.setContent(pageContent);
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
  // await page.screenshot({ path: 'results.png' });
  // console.log('screenshot grabbed');

  await browser.close();
})();
