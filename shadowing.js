// var a = 100;
// let b = 200; 
// const c = 300; 
// {
//     var a = 10;  //a is shadowing
//     let b = 20;  //b is shadowing
//     let c = 30;  //c is shadowing
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// showding is same with functional scope
var d = 100;
let e = 300;
const f = 400;
function ab() {
    var d = 40;
    let e = 30;
    const f = 40;
    console.log(d)
    console.log(e)
    console.log(f)
}
ab();
console.log("d", d)
console.log(e)
console.log(f)

// // illegal Shadowing
// // let g = 100;
// // {
// //     var g = 90;
// // }

// //legal Shadowing
var h = 1000;
{
    let h = 100;
    console.log(h)
}

let i = 99;
function abc() {
    var i = 99;
    console.log(i)
}
abc();
