// let a = parseFloat(prompt("Enter the first number:"));
// let b = parseFloat(prompt("Enter the second number:"));

// let sum = a + b;
// let difference = a - b;
// let product = a * b;
// let quotient = b !== 0 ? a / b : "Cannot divide by zero";

// console.log("Sum: " + sum);
// console.log("Difference: " + difference);
// console.log("Multiplication: " + product);
// console.log("Division: " + quotient);
// But this wont run on NODE JS as prompt is not defined there.
// So we will use readline module to take input from user in Node JS environment.

const readline = require('readline');
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Enter the first number: ", function (answer1) {
    let a = parseFloat(answer1);
    r.question("Enter the second number: ", function (answer2) {
        let b = parseFloat(answer2);

        let sum = a + b;
        let difference = a - b;
        let product = a * b;
        let quotient = b !== 0 ? a / b : "Cannot divide by zero";

        console.log("Sum: " + sum);
        console.log("Difference: " + difference);
        console.log("Multiplication: " + product);
        console.log("Division: " + quotient);

        r.close();
    });
});


//Now this runs in node.js