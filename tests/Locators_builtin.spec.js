const {test, expect} = require('@playwright/test')

test('Built-inLocators' ,async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // page.getByAltText()
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    // page.getByPlaceholder()
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")

    // page.getByRole()
    await page.getByRole('button',{type: 'submit'}).click()

    // page.getByText()
    await expect(await page.getByText('Abichal  hai shukla ')).toBeVisible()

    // for above syntax 
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

})