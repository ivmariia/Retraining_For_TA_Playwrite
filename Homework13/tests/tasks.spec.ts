
import { test, expect, APIResponse } from '@playwright/test';
// task1

// test('Task 1: GET user data from Reqres', async ({ request }) => {
//   const response: APIResponse = await request.get('https://reqres.in/api/users/2');
//   expect(response.ok()).toBeTruthy();

//   const body: any = await response.json();
//   const data = body.data;

//   expect(data.first_name).toBe('Janet');
//   expect(data.last_name).toBe('Weaver');
//   expect(data.email).toBe('janet.weaver@reqres.in');
// });

// task2

// test('Task 2: POST new post to DummyJSON', async ({ request }) => {
//     const postData = {
//       title: 'Awesome title',
//       userId: 10
//     };
  
//     const response: APIResponse = await request.post('https://dummyjson.com/posts/add', {
//       data: postData
//     });
  
//     expect(response.ok()).toBeTruthy();
  
//     const body: any = await response.json();
//     expect(body.title).toBe('Awesome title');
//     expect(body.userId).toBe(10);
//   });

test('Task 3: GET products with skip and limit', async ({ request }) => {
    const response: APIResponse = await request.get('https://dummyjson.com/products', {
      params: {
        skip: 10,
        limit: 5
      }
    });
  
    expect(response.ok()).toBeTruthy();
  
    const body: any = await response.json();
    const products = body.products;
  
    expect(products.length).toBe(5);
  
    expect(products[0].price).toBe(1899.99);
    expect(products[1].rating).toBeLessThan(4);
    expect(products[4].stock).toBeGreaterThan(10);
    expect(products[0]).toHaveProperty('returnPolicy');
  });
  