//An object is unordered collection ofkey value pairs. each key vlaue pair called a property.

var person = {
    firstName: "Aman",
    lastName: "Ojha"
}
// console.log(person)
//dot notation
// console.log(person.firstName)
//bracket notation
// console.log(person['firstName'])
var cap = {
    firstName: "Aman",
    lastName: "Ojha",
    address: {
        city: "Noida"
    }
}
console.log(cap.address.city)
console.log(cap['address']['city'])
cap.country = 'India'
console.log(cap)
console.log(delete cap.address)
console.log(cap)
 