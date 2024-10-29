// a = [1, 2, 3, 4,5,6]
// c= a.pop();
// console.log(c);
// b = a.push(7)
// console.log(b);

// x = a.shift();
// console.log(x);
// console.log(a);

// y = a.unshift(99);
// console.log(y);
// console.log(a);


// const x = 1;
// function print() {
//     var x = 2;
//     console.log('inside =>', x)
// }
// console.log('outside => ',x)
// print();

//destructing array

let arr = [1, 3, 4, 5, 6]

let [a, b, c, d] = arr;

console.log(d);


//destructing object

// let obj = {
//     name: 'Aman',
//     age: 26,
//     address: {country:'India'}
// }

// let { name:n, age:a, address:{country:c} } = obj
// console.log(c)



//callback
// const isEven = (n) => {
//     return n%2==0
// }

// let printResult = (evenFn, num) => {
//     let isEven = evenFn(num)
//     console.log(`${num} is even number ${isEven}`)
// }

// printResult(isEven,3)

//HOF

// let Arr = [1, 2, 3, 4, 5];

// let sequareArr = Arr.map(function (n) {
//     return n*n
// })
// console.log(sequareArr)

// let transactions = [1000, 2000, 3000, -4500];
// const inrtoDoller = 80;

// let rupee = transactions.map((doll => {
//     return (doll/inrtoDoller).toFixed(0);
// }))
// console.log(rupee)

// let transactions = [1000, 2000, 3000, -4500];
// const inrtoDoller = 80;

// let rupee = transactions.forEach((doll => {
//     console.log((doll/inrtoDoller).toFixed(0));
// }))
// console.log(rupee)

//Find Method : find return the first element of array that satisfy the condition
let transaction = [1000, 2000, 3000, -4500, -555];

let firstWindrawl = transaction.find(function (n) {
    return n < 0;
})

let firstWindrawlIndex = transaction.findIndex(function (n) {
    return n < 0;
})

// console.log(firstWindrawlIndex)


// some method: Condition Check: To get true or false based on a condition
// it will return true if even one element staisfy the condition.

// let array = [-1000, -2000, -3000, -4500, -555];

// let resultSome = array.some(function (n) {
//     return n < 0;
// })

// let resultEvery = array.every(function (n) {
//     return n < 0;
// })

// console.log('resultSome => ', resultSome)
// console.log('resultEvery => ', resultEvery)


// Filter: it will return a new array it will return  all those elements that matches the specific condition
let numbers = [2, 4, 6, 7, 8, 3, 9];
let evenNumbers = numbers.filter((n) => {
    return n % 2 == 0;
})
console.log(evenNumbers);

// Reduce: 
let addNumbers = numbers.reduce((acc, n) => {
    return acc + n;
}, 0)

console.log(addNumbers);

let flatern = [2, [4, 6], [7, 8, 3], 9];

const flattern = (arr)  => {
    return arr.reduce((acc, n) => {
        return acc.concat(Array.isArray(n) ? flattern(n) : n)
    }, [])
}
console.log('flatern array => ', flattern(flatern));

// chaining method: chaining is a process taking output from one method passing to another method in a same line.

let chainingArray = [
    { name: "H", age: 47, gender: "F" },
    {name: "G", age: 40, gender: "M"},
    { name: "F", age: 25, gender: "M" },
    {name: "E", age: 30, gender: "F"},
]

let getGenderFilter = chainingArray.filter((n) => {
       return n.gender == 'M'
}).map((male) => {
    return male.age
})

console.log('gender filter => ', getGenderFilter)

// let getAgeFilter = chainingArray.map((n) => {
//     return n.age;
// })
// console.log('age => ', getAgeFilter)

let transactions = [1000, 2000, 3000, -4500, -555];

let addNumber = transactions.filter((n) => {
    return n > 0;
}).reduce((acc, num) => {
    return acc + num;
}, 0)

console.log('add positive numbers', addNumber)


