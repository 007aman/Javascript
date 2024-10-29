//Hoisting =>  Hoisting refers to the process whereby the interpreter appears to move the declarations to the top of the code
//             before execution 
//             Javascript only hoists declarations, not initializtion the variable will be undefined until the line where its 
//             initialized is reached.
//             Function expression not be hoisted.  

// "use strict"
// x = 4;
// console.log(x);
// console.log(typeof x)

// let and const are temporal hoisted for a time being.
// console.log(a)    // Temporal Deadzone in case let 
var b = 100;
let a = 10;
// abs()
// const test = function abs() {   // Function expression
//     console.log("Chotu hai")
// }

//1-ReferenceError
// console.log(a)    cl// Temporal Deadzone in case let 
// let a = 10;
//2-Syntax Error   =>  Redeclairation 
// let c = 10;
// let c = 100;
// const b;
//3-TypeError
// const d = 100;
// d = 1000; 

greet()

function greet() {
    console.log('Testing')
}
add(2,4)
var add = function(a, b) {
    console.log(a+b)
}
