let person1  = {
    firstName: "Aman",
    age: 27,
    // personDetail: function () {
    //     console.log(`Hi i am ${this.firstName} ${this.age} years old`)
    // }
}
// person1.personDetail()

let personDetail = function (city, power) {
    console.log(`Hi i am ${this.firstName} ${this.age} years old and from ${city} power is ${power}`)
}

let person2  = {
    firstName: "Chotu",
    age: 18,
    // personDetail: function () {
    //     console.log(`Hi i am ${this.firstName} ${this.age} years old`)
    // }
}
console.log('personDetail', personDetail('1','2'))
// person1.personDetail.call(person2,'ALD','SE')
//call method
personDetail.call(person2,'ALD','SE')

//apply method (diff is argument pass in array)
personDetail.apply(person1, ['ALD', 'SE'])

//bind method
// let myFun = personDetail.bind(person1, 'ALD', 'SE')
// console.log(myFun)
// myFun();


let name1 = {
    firstName: "Shiv",
    lastName: "Mahadev",
    printFullName: function() {
        console.log(this.firstName+' '+ this.lastName)
    }
}

const fullName = function(homeTown) {
    console.log(this.firstName+' '+ this.lastName, + ' '+ homeTown)
}
let name2 = {
    firstName: "ABC",
    lastName: "FGH"
}

name1.printFullName.call(name2) // 1

//2
fullName.call(name2, 'ALD')
fullName.call(name1, 'NCR')

fullName.apply(name1, ['NCR'])

//bind
let printName = fullName.bind(name1, 'ALD')
console.log(printName())
