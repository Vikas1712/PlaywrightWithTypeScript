import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://letcode.in/');
}); 
 
test('should able to login into application', async ({ page }) => {
    // Create one todo item.
    //await page.goto('https://letcode.in/');
    await page.locator("text=Log in").click();
    await page.locator("input[name='email']").fill('dnsvikas.wins@gmail.com');
    await page.locator("input[name= 'password']").fill('Password@12345');
    await page.locator('button:text("LOGIN")').click();
    await page.locator('"Sign out"').click();
  });

  test('launch application', async ({ page }) => {
    // Create one todo item.
    //await page.goto('https://letcode.in/');
    await page.locator("text=Log in").click();
  });