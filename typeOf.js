let a = 2;
console.log(typeof(a));

let b = 'string';
console.log(typeof(b));

let c = true;
console.log(typeof(c));

let d = {
    name: 'aman',
    age: 23
}
console.log(typeof (d))

let e = [1, 2, 3]
console.log(typeof (e))

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// console.log(member.getFullName());
   
//    Person.getFullName = function() {
   
//    return `${this.firstName} ${this.lastName}`;
   
//    };
// const member = new Person('Lydia', 'Hallie');
   

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = Person('Sarah', 'Smith');
//     console.log(lydia);
// console.log(sarah);
    

// const shape = {
//     radius: 10,
//     diameter() {
//     return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//    };
   
//    console.log(shape.diameter());
// console.log(shape.perimeter());
   
const bird = {
    size: 'small',
   };
   
   const mouse = {
    name: 'Mickey',
    small: true,
   };

console.log(mouse[bird.size])
console.log(mouse[bird["size"]])
