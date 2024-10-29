//1. map function will loop through every element of array and perform specific operation that we will provide

//2. map function will return always new array with your result

let arr = [1, 2, 3, 4, 5]

let squArr = arr.map(n => {
    return n * n;
})
console.log(squArr)

// double [1,4,6,16,25]
function double(n) {
    return 2*n
}
let outPut = arr.map(double)
let secOutPut = arr.map(function (n) {
    return 2 * n;
})
let thiOutPut = arr.map(n =>  2 * n)
console.log('output => ', outPut)
console.log('secOutPut => ', secOutPut)
console.log('thiOutPut => ', thiOutPut)

//foreach
// 1. foreach not return any array or return value
let nArr = [1, 2, 3, 4, 5]
let squNArr = arr.forEach(n => {
    console.log(n * n);
})
squNArr;

let sum=0;
let arry = [10,15,20,30];  
arry.forEach(function myFunction(element) {  sum= sum+element;  });  
console.log(sum);