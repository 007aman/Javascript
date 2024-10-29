// let sumNum = function (x, y) {
//     return x+y
// }

// console.log(sumNum(2, 5));

let sumNum = function(x) {  //->  Curring example
    return function(y) {
        console.log(x + y);
    } 
}

summ = sumNum(5)
summ(88)

let sum = (x) => {
    return ((y) => {
        console.log(x+y)
    })
}

let s = sum(5)
s(10)

//Curring Method 2
function multiple(x, y) {
    console.log(x*y)
}

var multipleBy = multiple.bind(this, 2)
multipleBy(5)
