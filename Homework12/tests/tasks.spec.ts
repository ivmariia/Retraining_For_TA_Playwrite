import { test, expect } from '@playwright/test';

// task1


// test('Login flow on the-internet.herokuapp.com', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/login');

//   await page.fill('#username', 'invalid');
//   await page.fill('#password', 'invalid');
//   await page.click('button[type="submit"]');
//   await expect(page.locator('#flash')).toContainText('Your username is invalid');

//   await page.fill('#username', 'tomsmith');
//   await page.fill('#password', 'SuperSecretPassword!');
//   await page.click('button[type="submit"]');
//   await expect(page).toHaveURL(/secure/);
//   await expect(page.locator('#flash')).toContainText('You logged into a secure area');

//   await page.click('a[href="/logout"]');
//   await expect(page.locator('#flash')).toContainText('You logged out');
// });

// task2

// test('Checkbox interaction on guru99', async ({ page }) => {
//     await page.goto('https://demo.guru99.com/test/radio.html');
  
//     for (const id of ['vfb-6-0', 'vfb-6-1', 'vfb-6-2']) {
//       const checkbox = page.locator(`#${id}`);
//       await checkbox.check();
//       await expect(checkbox).toBeChecked();
//     }
  
//     for (const id of ['vfb-6-0', 'vfb-6-1', 'vfb-6-2']) {
//       const checkbox = page.locator(`#${id}`);
//       await checkbox.uncheck();
//       await expect(checkbox).not.toBeChecked();
//     }
//   });
  
// task3

// test('Dropdown inside iframe using frameLocator', async ({ page }) => {
//   await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');

//   const frame = page.frameLocator('#iframeResult');
//   await frame.locator('select').selectOption('saab');
//   await expect(frame.locator('select')).toHaveValue('saab');

//   await frame.locator('input[type="submit"]').click();
//   await page.waitForTimeout(1000);

//   const resultFrame = await page.frame({ name: 'iframeResult' });
//   if (!resultFrame) throw new Error('iframeResult не знайдено');

//   const text = await resultFrame.locator('html').innerText();

//   expect(text).toContain('cars=saab');
// });

// task4

// test('Form submission on Formy Project', async ({ page }) => {
//   await page.goto('http://formy-project.herokuapp.com/form');

//   await page.fill('#first-name', 'Sam');
//   await page.fill('#last-name', 'Robertson');
//   await page.fill('#job-title', 'Test Automation Engineer');

//   await page.check('#radio-button-2');

//   await page.check('#checkbox-1');

//   await page.selectOption('select', { label: '5-9' });

//   await page.fill('#datepicker', '12/14/2024'); 

//   await page.click('.btn.btn-lg.btn-primary');

//   await expect(page.locator('.alert.alert-success')).toHaveText('The form was successfully submitted!');
// });

// task5

test('E-commerce: add HTC Touch HD to cart and verify total', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  
    await page.click('a[href*="path=45"]'); // Перехід у категорію path=45 - Віндовс, тому що Phones & PDAs зараз немає в трендових категоріях

    await page.fill('input[name="mz_fp[min]"]', '135');
    await page.fill('input[name="mz_fp[max]"]', '165');
    await page.press('input[name="mz_fp[max]"]', 'Enter');
  
    await page.waitForLoadState('networkidle'); 
  
    const products = page.locator('.product-thumb:has-text("HTC Touch HD")');
    await expect(products).toHaveCount(8);
  
    const htc = products.first();
    await htc.hover();
  
    const addButton = htc.locator('button[onclick*="cart.add"]');
    await addButton.evaluate(el => el.click());
  
    const toastBox = page.locator('#notification-box-top .toast');
    await toastBox.waitFor({ state: 'visible', timeout: 10000 });
  
    await expect(toastBox).toContainText('Success: You have added HTC Touch HD to your shopping cart!');
    await expect(toastBox).toContainText('$146.00');
  });
  