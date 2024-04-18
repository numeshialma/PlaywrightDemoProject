const { test, expect } = require('@playwright/test')

test('AssertionsTest',async({page})=>{

    // open app url
    await page.goto('https://demo.nopcommerce.com/register')

    // 1) expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2) expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) expect(locator).toBeVisible()
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // 4) expect(locator).toBeEnabled()
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()
    
    // 5) expect(locator).toBeChecked()

    // radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()    // select radio button

    await expect(maleRadioButton).toBeChecked()

    // check box
    const newsLetterCheckBox = await page.locator('#Newsletter')
    await expect(newsLetterCheckBox).toBeChecked()
    
    // 6) expect(locator).toHaveAttribute()
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    // 7) expect(locator).toHaveText()
    await expect(await page.locator('.page-title h1')).toHaveText('Regsiter')   // full text

    // 8) expect(locator).toHContainText()
    await expect(await page.locator('.page-title h1')).toContainText('Reg')   // partial text

    // 9) expect(locator).toHaveValue()
    const emailInput = await page.locator('#Email')
    emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')

    // 10) expect(locator).toHaveCount()
    


})