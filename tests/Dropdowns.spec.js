const { test, expect } = require('@playwright/test');

test('Handle dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com');

    // Multiple ways to select option from the dropdown

    await page.locator("#country").selectOption({label:'India'});   // label/ visible text

    // await page.locator("#country").selectOption('India');   // visible text

    // await page.locator("#country").selectOption({value:'india'});   // by using value

    // await page.locator("#country").selectOption({index:1});   // by using index

    // await page.selectOption("#country",'India')  // by text

    
    // Assertions

    // 1) check number of options in dropdown - Approach 1
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10);

    // 2) check number of options in dropdown - Approach 2
    const options1 = await page.$$('#country option')
    // console.log("Number of options : ", options1.length)  // print
    await expect(options1.length).toBe(10);

    // 3) check presence of value in the dropdown - Approach 1
    const content = await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy();

    // 4) check presence of value in the dropdown - Approach 2 - using looping
    const options2 = await page.$$('#country option')
    let status = false;

    for(const option of options2){
        // console.log(await option.textContent())
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();

    // 5) select option from dropdown using loop
    const options3 = await page.$$('#country option')

    for(const option3 of options3){
        let value3 = await option3.textContent();
        if(value3.includes('France')){
            await page.selectOption("country", value3);
            break;
        }
    }
    expect(status3).toBeTruthy();

    await page.waitForTimeout(5000);


})
