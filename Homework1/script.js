//Task_1


// let minutes = prompt('Insert an amount of minutes:');
// if(minutes < 0)
//     prompt('Invalid input');

// const MINUTES_IN_HOUR = 60;
// let hours = Math.floor(minutes / MINUTES_IN_HOUR);
// let remainingMinutes = minutes % MINUTES_IN_HOUR;

// console.log `${hours}:${remainingMinutes}`;

// Task_2
// let x = parseFloat(prompt("Insert first number:"));
// let y = parseFloat(prompt("nsert second number:"));

// let sum = x + y;
// let difference = Math.abs(x - y);
// let product = x * y;
// let quotient = x / y;

// alert(`Sum: ${sum}
// Difference: ${difference}
// Product: ${product} 
// Quotient: ${quotient}`);

// Task_3

// let x = 1;
// let y = 2;

// let res1 = String(x) + y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = y > x;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = Math.sqrt(x - y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Task_4

// let grade = prompt('Insert a grade')

// if(grade >= 0 && grade <= 49) {
//     alert("Unsatisfied!");
// } else if(grade >=50 && grade <= 70) {
//     alert("Satisfied!");
// } else if(grade >= 71 && grade <= 87){
//     alert("Good!");
// } else if(grade >= 88 && grade <= 100){
//     alert("Excellent!");
// } else{
//     alert("Incorrect assessment");
// }

// or

// let grade = parseInt(prompt('Insert a grade'));

// switch (true) {
//     case (grade >= 0 && grade <= 49):
//         alert("Unsatisfied!");
//         break;
//     case (grade >= 50 && grade <= 70):
//         alert("Satisfied!");
//         break;
//     case (grade >= 71 && grade <= 87):
//         alert("Good!");
//         break;
//     case (grade >= 88 && grade <= 100):
//         alert("Excellent!");
//         break;
//     default:
//         alert("Incorrect assessment");
// }


// Task_5

// for (let i = 1; i <= 50; i++) {
//     let message = i; 

//     if (i % 4 === 0) {
//         message += " kratne 2 & 4!";
//     } else if (i % 2 === 0) {
//         message += " kratne 2!";
//     }

//     console.log(message);
// }


// Task_6

// let num = parseInt(prompt("Insert a number:"));

// if (math.isPrime(num)) {
//     alert(`${num} is a prime number.`);
// } else {
//     alert(`${num} is not a prime number.`);
// }