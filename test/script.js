const {Browser ,Builder, By , Key , Until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

;(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
      await driver.get('https://www.lambdatest.com/');
      await driver.findElement(By.linkText.apply('Login')).click();
      await driver.wait(Until.elementLocated (By.id('email')), 5000);
        await driver.findElement(By.id('email')).sendKeys('er.ritikpal@gmail.com');
        await driver.findElement(By.id('password')).sendKeys
        ('Ritik12@');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(Until.urlContains('dashboard'), 50000);
        console.log('Login successful!');
        const logs = await driver.manage().logs().get('browser');
        console.log('Browser Logs:');
        logs.forEach(log => console.log(`[${log.level}] ${log.message}`));


     }
    catch (err) {
        console.error('Test failed:',err);
     }
    finally { 
        await driver.quit();
    }

    
}) ()