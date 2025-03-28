// Task 1

// function removeSpaces(text) {
//     return text.replace(/^\s+|\s+$/g, '');
// }

// console.log(removeSpaces('   textWithSpaces   '));
// console.log(removeSpaces('   more text with spaces   '));

// Task 2

// function findCapitalWords(sentence) {
//     return sentence.match(/\b[A-Z][a-z]*\b/g) || [];
// }
  
// console.log(findCapitalWords("The Quick Brown Fox jumps over the Lazy Dog"));  
// console.log(findCapitalWords("no capital letter here"));

// Task 3

// function getLetterCount(text) {
//     const letters = text.toLowerCase().match(/[a-z]/g); // підтримка укр. алфавіту, якщо потрібно
//     const result = {};
  
//     if (letters) {
//       for (const letter of letters) {
//         result[letter] = result[letter] !== undefined ? result[letter] + 1 : 1;
//       }
//     }
  
//     return result;
// }
  
// console.log(getLetterCount("banana")); 
// console.log(getLetterCount("The short text")); 
  
// Task 4

// document.getElementById("getEmailsBtn").addEventListener("click", function () {
//     fetch("https://fakestoreapi.com/users")
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then(data => {
//         const emailList = document.getElementById("emailList");
//         emailList.innerHTML = ""; 
  
//         data.forEach(user => {
//           const li = document.createElement("li");
//           li.textContent = user.email;
//           emailList.appendChild(li);
//         });
//       })
//       .catch(error => {
//         alert("Error loading data: " + error.message);
//       });
//   });

// Task 5


document.getElementById("getUserButton").addEventListener("click", function () {
    const inputName = document.getElementById("userNameInput").value.trim().toLowerCase();
    const citySpan = document.getElementById("userCity");
  
    citySpan.textContent = "Searching...";
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      })
      .then(users => {
        const user = users.find(u => u.name.toLowerCase() === inputName);
  
        if (user) {
          citySpan.textContent = user.address.city;
        } else {
          citySpan.textContent = "User not found";
        }
      })
      .catch(error => {
        console.error(error);
        citySpan.textContent = "Error loading data: " + error.message;
      });
  });
  