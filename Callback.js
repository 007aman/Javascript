// 1. What is callback function in Javascript

//Ans: Take a function pass it to another function when you do so that function which pass to another function know as callback function.

//example:
// setTimeout(function () {
//     console.log('Timer')
// },5000)
// function x(y) {
//     console.log('x');
//     y();
// }
// x(function y() {
//     console.log('y')
// })

// function attachEventListner() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener('click', function xyz() {
//         console.log('Button Click', count++)
//     });
// }
// attachEventListner();


// 2. Garbage Collection and removeEventListner




setTimeout(function () {
    console.log('timer')
},5000)
// callback function
function firstName(name, cb) {
    console.log(name)
    cb('rogers')

}
function lastname(last) {
    console.log('last=>', last)
}

firstName('steve', lastname)


/*Callback Hell
1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control.
*/
