import {  test, expect,Browser, BrowserContext, chromium, Page } from "@playwright/test"
import CommonFunctions from "../page/common.page";
import HeaderPage from "../page/Header.page";
import LoginPage from "../page/Login.page";
import Env from "./utils/environment";

test.describe('TC001',()=>{

    let browser:Browser;
    let context:BrowserContext;
    let page:Page;

    //Page Initialization
    let headerPage:HeaderPage;
    let loginPage:LoginPage;
    let command:CommonFunctions;

    test.beforeEach(async()=>{
        browser = await chromium.launch({
            headless:false
        });
        context = await browser.newContext()
        page= await context.newPage();
        await page.goto(Env.test)
        headerPage = new HeaderPage(page);
        loginPage = new LoginPage(page);
        command = new CommonFunctions(page);
    })
    test("Login positive",async ()=>{
        expect(page.url()).toBe("https://letcode.in/");
        await headerPage.clickLogin();
        expect(page.url()).toBe("https://letcode.in/signin");
        await loginPage.enterUserName('dnsvikas.wins@gmail.com');
        await loginPage.enterPassword('Password@12345');
        await loginPage.clickLoginBtn();
        const toster=await command.toaster;
        expect(await toster?.textContent()).toContain("Welcome");
        await headerPage.clickSignOutLink();
    })

    test("Login Again",async ()=>{
        expect(page.url()).toBe("https://letcode.in/");
        await headerPage.clickLogin();
        expect(page.url()).toBe("https://letcode.in/signin");
        await loginPage.login('dnsvikas.wins@gmail.com','Password@12345');
        const toster=await command.toaster;
        expect(await toster?.textContent()).toContain("Welcome");
        await headerPage.clickSignOutLink();
    })
})