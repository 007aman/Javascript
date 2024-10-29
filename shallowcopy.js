let person = {
    name: 'Aman',
    age: 23,
    address: {
        city: 'Noida'
    }
}
// copy with spread operator  
let secondPerson = { ...person };  //->  shallowcopy   (working on only first object)
secondPerson.name = 'Ojha'
secondPerson.age = 30
secondPerson.address.city = 'ALD'  //-> not working here for nested objects
secondPerson.address = {}  //-> not working here for nested objects
console.log(person);
console.log(secondPerson);