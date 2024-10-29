// Filter: it returns new array it will return all those element that matches the specific condition
// if condition true it will return element for that condition if false it will discard that element

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

function oddNum(n) {
    return n % 2;
}
let newarr = arr.filter(n => {
    return n%2==0
})

let secArr = arr.filter(oddNum);
console.log(newarr);
console.log('secfunct => ', secArr);