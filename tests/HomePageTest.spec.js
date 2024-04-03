
const { test, expect } = require('@playwright/test');


test('Home Page' ,async ({page})=>{

    // Set the timeout for page navigation
    await page.goto('https://www.demoblaze.com/index.html', {timeout:60000});
    


    // Get and log the page title
    const pageTitle = await page.title();
    console.log('Page title is : ' , pageTitle);

    // Check if the page title is as expected
    await expect(page).toHaveTitle('STORE');   


    // Get and log the page URL
    const pageURL = await page.url();
    console.log('Page URL is :',pageURL);

    // Check if the page URL is as expected
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');


    // Close the page
    await page.close();

} )

