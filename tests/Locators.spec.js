// const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test'

// Anonymous function
test('Locators' ,async ({page})=>{
    
    // Set the timeout for page navigation
    await page.goto("https://www.demoblaze.com/index.html")

    // Click on login button - property
    // await page.locator('id=login2').click()
    await page.click('id=login2')

    // Provide username - CSS
    // await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername','pavanol')
    // await page.type('#loginusername','pavanol)

    // Provide password - CSS
    await page.fill("input[id='loginpassword']",'test@123')

    // Click on login button -XPath
    await page.click("//button[normalize-space()='Log in']")

    // Verify logout link presence - XPath
    const logoutLink = await page.locator("//a[normalize-space='Log out']")
    await expect(logoutLink).toBeVisible();

    await page.close();


})