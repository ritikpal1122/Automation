const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    console.log('Step 1: Launching the browser...');
    // Navigate to LambdaTest
    await driver.get('https://www.lambdatest.com/');
    console.log('Step 2: Navigated to LambdaTest homepage.');

    // Click on the "Login" button
    console.log('Step 3: Clicking on the "Login" button...');
    await driver.findElement(By.linkText('Login')).click();

    // Wait for the login page to load
    console.log('Step 4: Waiting for the login page to load...');
    await driver.wait(until.elementLocated(By.id('email')), 5000);

    // Enter email and password
    console.log('Step 5: Entering email...');
    await driver.findElement(By.id('email')).sendKeys('er.ritikpal@gmail.com');
    console.log('Step 6: Entering password...');
    await driver.findElement(By.id('password')).sendKeys('Ritik12@');

    // Click on the "Login" button
    console.log('Step 7: Clicking on the "Login" button...');
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Wait for successful login
    console.log('Step 8: Waiting for successful login...');
    await driver.wait(until.urlContains('dashboard'), 50000);
    console.log('Step 9: Login successful!');

    // Fetch and print browser logs
    console.log('Step 10: Fetching browser logs...');
    const logs = await driver.manage().logs().get('browser');
    console.log('Browser Logs:');
    logs.forEach(log => console.log(`[${log.level}] ${log.message}`));
  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    console.log('Step 11: Closing the browser...');
    await driver.quit();
  }
})();