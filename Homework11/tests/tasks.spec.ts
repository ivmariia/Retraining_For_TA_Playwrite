import { test, expect } from '@playwright/test';

// task1

// test('Example.com page content checks', async ({ page }) => {
//   await page.goto('https://example.com/');

//   await expect(page).toHaveTitle('Example Domain');

//   expect(page.url()).toContain('example.com');

//   await expect(page.locator('body')).toHaveText(
//     /This domain is for use in illustrative examples/
//   );

//   await expect(page.locator('h1')).toHaveText('Example Domain');
// });

// task2

// test('Playwright homepage checks', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
  
//   expect(page.url().startsWith('https://playwright.dev')).toBeTruthy();

//   const links = page.locator('a', { hasText: 'Get started' });
//   await expect(links).toHaveCount(1); 
// });

// task3

// test('Google search', async ({ page }) => {
//   await page.goto('http://www.google.com');

//   await page.locator('input.gLFyf').fill('Playwright');

//   await page.keyboard.press('Enter');
//   await page.waitForSelector('#search');

//   const resultsText = await page.locator('#search').innerText();
//   expect(resultsText).toContain('Playwright');
// });


// task4

test('Playwright homepage navigation to docs', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/.*\/docs/);
});
