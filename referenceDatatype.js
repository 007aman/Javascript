// Reference Datatype =>  create heap Memory

// Datatype
/*
1. Object
2. Array
3. Function
*/

let detail = { name: 'Aman', age: 23 }
let person = detail
detail.name = 'Ojha'
// detail.last = 'Aman'
console.log(detail);
console.log(person);

let arrData = ['Aman']
let cData = arrData
arrData[0] = 'Ojha'
console.log('arrData', arrData)
console.log('cData', cData)