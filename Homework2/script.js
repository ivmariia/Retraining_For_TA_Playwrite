// Task_1

// function processData(num1 = 0, num2 = 0, action = 'sum'){
//     if(action == 'sum'){
//         return num1 + num2;
//     }else if(action == 'product'){
//         return num1 * num2;

//     }else if(action == 'square'){
//         return Math.pow(num1, num2);
//     }else{
//         return 'Invalid date'
//     }
        
// }

// console.log(processData(10, 4, 'product'));
// console.log(processData(4, 4, 'square'));
// console.log(processData());

// Task_2

// function findElem(arr, el){
//     for (let i = 0; i < arr.length; i++){
//         if (el == arr[i]){
//             return true
//         }
//     }
//     return false;
// }

// let arr = [1, 2, 3, 4, 'Alex', 10, 'Nick']

// console.log(findElem(arr, 7));

// console.log(findElem(arr, 'Alex'));

// Task_3

// function deleteItem(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             arr.splice(i, 1);
//             return arr;  
//         }
//     }
//     return arr;  
// }

// console.log(deleteItem([3,12,16,19,21,33], 16));  

// Task_4

// function getCircleLength(r){
//     if(typeof r !== 'number' ||  r <= 0){
//         throw new Error ('Incorrect radius - Please enter a positive numeric value!')
//     }
//     return  Math.PI * Math.pow(r, 2)
// }


// try{
//     console.log(getCircleLength('five'));
// } catch(error){
//     console.log(error.message);
// }

// Task_5

// function checkID(){
//     let userID = parseInt(prompt('Please enter your ID!'));
//     if(userID === null){
//         throw new Error('The field is empty! Please enter your ID')
//     }else if(isNaN(userID)){
//         throw new Error("The entered value is not a number");
//     }else if(userID < 1 || userID > 1000){
//         throw new Error('ID number is incorrect');
//     }
//     alert('The ID number is correct')
// }

// try{
//     checkID();
// } catch(error){
//     console.log(error.name + ": " + error.message);
// }

// Task_6

// function findArrDiff(arr1, arr2){
        
//         let uniqueValues = arr1
//             .filter(num => !arr2.includes(num))   
//             .concat(arr2.filter(num => !arr1.includes(num))); 
    
//         return uniqueValues;
// }  
//     console.log(findArrDiff([5,20,10], [0,10,20,30])); 
    