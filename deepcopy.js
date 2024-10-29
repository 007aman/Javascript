let person = {
    name: 'Aman',
    age: 23,
    address: {
        city: 'Noida'
    }
}
// copy with spread operator  
let secondPerson = JSON.parse(JSON.stringify(person))  //->  deep copy
secondPerson.name = 'Ojha'
secondPerson.address.city = 'LKO'  // ->only change in second object
console.log(person); 
console.log(secondPerson);

let obj = { name: 'Ojha' }
let user = obj
console.log(user)