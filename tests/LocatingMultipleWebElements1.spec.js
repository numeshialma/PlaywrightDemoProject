// const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test'


test('LocateMultipleElements' ,async ({page})=>{
    
    await page.goto("https://www.demoblaze.com/index.html")

    // Locating multiple elements

    const products = await page.$$("//div[@id=’tbodyid’]//div//h4//a")

    for(product of products){
        const productName = await product.textContent();
        console.log(productName)
    }
    
    await page.close();

})