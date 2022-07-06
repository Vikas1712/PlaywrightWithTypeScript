import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://letcode.in/');
}); 
 
test('should able to login into application', async ({ page }) => {
    // Create one todo item.
    //await page.goto('https://letcode.in/');
    await page.click("text=Log in");
    await page.fill("input[name='email']",'dnsvikas.wins@gmail.com');
    await page.fill("input[name= 'password']",'Password@12345');
    await page.click('button:text("LOGIN")');
    await page.click('"Sign out"');
  });

  test('launch application', async ({ page }) => {
    // Create one todo item.
    //await page.goto('https://letcode.in/');
    await page.click("text=Log in");
  });