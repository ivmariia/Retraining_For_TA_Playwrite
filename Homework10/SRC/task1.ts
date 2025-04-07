function display(message: string): void;
function display(message1: string, message2: string): void;
function display(messages: string[]): void;

function display(arg1: string | string[], arg2?: string): void {
    if (Array.isArray(arg1)) {
        arg1.forEach(msg => console.log(msg));
    } else if (typeof arg2 === "string") {
        console.log(arg1);
        console.log(arg2);
    } else {
        console.log(arg1);
    }
}

display("Hello, World!");
display("Hello", "World!");
display(["Hello", "World", "!"]);
