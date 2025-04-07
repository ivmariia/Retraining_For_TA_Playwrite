"use strict";
function display(arg1, arg2) {
    if (Array.isArray(arg1)) {
        arg1.forEach(msg => console.log(msg));
    }
    else if (typeof arg2 === "string") {
        console.log(arg1);
        console.log(arg2);
    }
    else {
        console.log(arg1);
    }
}
display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);
