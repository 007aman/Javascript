// var obj = {}

// console.log(obj);

// var obj1 = {
//     name: 'aname',
//     age: 23
// }

// console.log(obj1)

function Person(_name, _age) {
        this.name = _name
        this.age = _age
}

Person.prototype.getNameAndAge = function () {
    console.log(`I am driving the ${this.name} car my age is ${this.age}`)
}

person1 = new Person('Steve', 45);
person2 = new Person('Tony', 40);
console.log(person1)
console.log(person2)