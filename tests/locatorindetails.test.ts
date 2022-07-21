import {  test } from "@playwright/test"

test("Locator in details",async({page})=>{

    await test.step("Login",async()=>{
        await page.goto("https://www.saucedemo.com");
        headless:false
        const user = page.locator("[data-test='username']")
        await user.fill("standard_user")
        const pass= page.locator("[data-test='password']")
        await pass.fill("secret_sauce");
        await page.click("[data-test='login-button']")

    })
    await test.step("Change Price",async()=>{
     const priceSelect= page.locator("[data-test='product_sort_container']")  
      //const priceSelect= await page.$("[data-test='product_sort_container']")  
      await priceSelect.selectOption({value:"lohi"})
      const firstProduct = page.locator("#inventory_container div.inventory_item_label a div")
      console.log(await firstProduct.first().textContent());
      await priceSelect.selectOption({value:"hilo"})  
      console.log(await firstProduct.first().textContent());
    })
})