// const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test'


test('LocateMultipleElements' ,async ({page})=>{
    
    await page.goto("https://www.demoblaze.com/index.html")

    // Locating multiple elements
    const links = await page.$$('a');

    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }

    

    await page.close();


})