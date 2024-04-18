const {test,expect} = require('@playwright/test')

test('handle input',async({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    // Inputbox - firstname

    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();


    await page.locator("//input[@id='name']").fill("John")
    // page.fill("//input[@id='name']",'John');


})