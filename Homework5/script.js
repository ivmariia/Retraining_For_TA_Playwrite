// Task1
// function gettUserInfo(obj) {
//     const { firstName, lastName, contact: { email, phone }, address: { city } } = obj;
//     return { firstName, lastName, email, phone, city };
// }

// const user = { 
//     firstName: "John", 
//     lastName: "Doe", 
//     age: 30, 
//     contact: { 
//         email: "john.doe@example.com", 
//         phone: "123-456-7890" 
//     }, 
//     address: { 
//         city: "New York", 
//         country: "USA" 
//     } 
// };

// console.log(gettUserInfo(user));

// Task2

// function countCars(cars) {
//     const carCount = new Map();

//     for (const car of cars) {
//         carCount.set(car, (carCount.get(car) || 0) + 1);
//     }

//     return carCount;
// }

// const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
// console.log(countCars(cars));


// Task3

// function checkLogin(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === "admin" && password === "qwerty123456") {
//                 resolve(`Welcome, ${username}!`);
//             } else {
//                 reject("Invalid username or password!");
//             }
//         }, 2000);
//     });
// }

// checkLogin("admin", "qwerty123456")
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));

// Task4

// async function loadUserProfile(userId) {
//     try {
//         const profile = await fetchUserProfile(userId);
//         const posts = await fetchUserPosts(userId);
//         return { profile, posts };
//     } catch (error) {
//         return "Error loading user data";
//     }
// }

// loadUserProfile(1)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// async function fetchUserProfile(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ userId, name: "John Doe", age: 30 });
//         }, 1000);
//     });
// }

// async function fetchUserPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { postId: 1, content: "Hello, world!" },
//                 { postId: 2, content: "Loving this app!" }
//             ]);
//         }, 2000);
//     });
// }

// Task5

function updateCart(cart, newItem) {
    const updatedCart = cart.map(item => ({ ...item }));

    const index = updatedCart.findIndex(item => item.id === newItem.id);

    if (index !== -1) {
        updatedCart[index].quantity += newItem.quantity;
    } else {
        updatedCart.push({ ...newItem });
    }

    return updatedCart;
}

const cart = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Smartphone", price: 800, quantity: 2 },
];

console.log(updateCart(cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 }));

console.log(updateCart(cart, { id: 3, name: "Tablet", price: 600, quantity: 1 }));



