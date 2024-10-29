// function a() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, i * 1000)
//         }
//         close(i)
//     }
//     console.log("Set Time Out Clourse")
// }
// a();


// //when use let it print correct because let is block scope every time new let define;
// function a() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(x);
//         }, i * 1000)
//     }
//     console.log("Set Time Out Clourse")
// }
// a();

count = 0; z = 1;
function counter() {
    return function incrementCounter() {
        console.log(count);
    }
}
console.log(z);
