// Task_1
// document.querySelector('.btn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent actual form submission

//     let name = document.querySelector('input[name="fio"]').value;
//     let phoneNumber = document.querySelector('input[name="phone"]').value;
//     let dateOfBirth = document.querySelector('input[name="birthday"]').value;
//     let emailAddress = document.querySelector('input[name="email"]').value;

//     console.log("Name:", name);
//     console.log("Phone Number:", phoneNumber);
//     console.log("Date of Birth:", dateOfBirth);
//     console.log("Email Address:", emailAddress);
// });


// Task_2
let button = document.getElementById("btn");
button.addEventListener("click", function(){
    let header = document.querySelector("h2");
    header.style.color = "red"; 
    header.style.textDecoration = "underline";
    
    let paragraph = document.getElementById("data");
    paragraph.style.color = "brown";
    paragraph.style.fontSize = "18px";   
    paragraph.style.fontFamily = "Comic Sans MS"; 
    
    let span = document.querySelector("span");
    span.style.color = "green";
    span.style.fontStyle = "italic";
    
    let div = document.querySelector("div");
    div.style.display = "none";;
    })

// Task_3

// let button = document.getElementById("button");
// let paragraph = document.getElementById("paragraph");

// button.addEventListener("click", function(){
//     paragraph.textContent = "I was pressed!";
// });

// button.addEventListener("mouseover", function(){
//     paragraph.textContent = "Mouse on me!";
// });

// button.addEventListener("mouseout", function(){
//     paragraph.textContent = "Mouse is not on me!";
// });

// Task_4

// document.addEventListener("DOMContentLoaded", function () {
//     let article = document.createElement("article");
//     article.classList.add("article", "postList");

//     let container = document.createElement("div");
//     container.id = "container";

//     for (let i = 1; i <= 3; i++) {
//         let paragraph = document.createElement("p");
//         paragraph.textContent = `Post ${i}`;
//         container.appendChild(paragraph);
//     }

//     article.appendChild(container);

//     document.body.appendChild(article);
// });333

// Task_5

    // function sendMessage() {
    //     let inputField = document.getElementById("messageInput");
    //     let messageText = inputField.value.trim();

    //     if (messageText === "") return;

    //     let messagesContainer = document.getElementById("messages");

    //     let messageDiv = document.createElement("div");
    //     messageDiv.classList.add("message-container");

    //     let textPara = document.createElement("p");
    //     textPara.classList.add("message-text");
    //     textPara.textContent = messageText;

    //     let datePara = document.createElement("p");
    //     datePara.classList.add("message-date");
    //     let now = new Date();
    //     datePara.textContent = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    //     messageDiv.appendChild(textPara);
    //     messageDiv.appendChild(datePara);

    //     messagesContainer.prepend(messageDiv);

    //     inputField.value = "";
    // }