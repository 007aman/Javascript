// the destructuring assigment syntex is a javascript expression that makes it possible to unpack values from arrays or properties 
// from objects, into distinct variables 

//Array
let arr = ['j', 'k', 'm', 'l']
let [a, b, c, d] = arr
console.log(d)

//Object
let person = { name: 'amanojha', age: 30, address: { country: 'India', state: 'UP'} }

let { name: n, age, address:{country, state: s} } = person
console.log(n)
console.log(address)
console.log(country)
console.log(s)


