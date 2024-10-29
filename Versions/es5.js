// use strict
"use strict"
var arr = []
console.log(arr)

//Access on String

var str = "Hello World"
console.log(str.charAt(0))

//Strings Over Multiple Lines
var str2 = "Hello \
World"
console.log(str2)

//Reserved Words as Property Names
var obj = {name: "Shiv", email:"shiv@bb.com"}

//String trim()
var str3 = "    Hello World!!   "
console.log(str3.trim())

//Array.isArray()
var array = [2,4,5,6,6,4]
console.log(Array.isArray(array))

//Array forEach()
array.forEach(myFun)

function myFun(val) {
    console.log(val)
}

//Array map()
function mul(val) {
    return(val*2)
}
var mul1 = array.map(mul)
console.log(mul1)

//Array filter()
function div(val){
    return (val%2 == 0)
}
var div2 = array.filter(div)
console.log(div2)

//Array reduce
function sum(total,val){
   return total+val
}
var sum1 = array.reduce(sum)
console.log(sum1)

//Array reduceRight()
function sumReduce(total, val){
   return total+val
}
var sumReduce1 = array.reduceRight(sumReduce)
console.log(sumReduce1)

//Array every()
function eve(val){
    return val>4
}
var eve2 = array.every(eve)
console.log(eve2)

//Array some()
function som(val){
    return val>4
}
var som2 = array.some(eve)
console.log(som2)

//Array indexOf()
console.log(array.indexOf(4))

//Array lastIndexOf()
console.log(array.lastIndexOf(4))

//JSON.parse(): The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

//JSON.stringify(): Use the JavaScript function JSON.stringify() to convert it into a string.

//Date.now(): Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).
console.log(Date.now())

//Property Getters and Setters
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set lang(value) {
        this.language = value;
    }
  };
  console.log(person.fullName)
  console.log(person.lang = 'bb')
  console.log(person.language)

//Object.create(): The Object.create() method creates an object from an existing object.
  // Create an Object:
const person2 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  // Create new Object
  const man = Object.create(person2);
  man.firstName = "Peter";
  console.log(man)
  console.log(person2)

//Object.keys(): 
  
// Create an Object
const person3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
// Get the Keys
const keys = Object.keys(person3);
console.log(keys)

//Object Protection

//Object.seal()

// Create Object
const person4 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Seal Object
Object.seal(person4)
person4.firstName = 'Wock'
// This will throw an error
// delete person4.age;
console.log(person4)

//Object.freeze()

Object.freeze(person4)
person4.firstName = 'HHH'

//Function Bind(): With the bind() method, an object can borrow a method from another object.

const person5 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
let fullName = person5.fullName.bind(member);

//Trailing Commas
//ES5 allows trailing commas in object and array definitions:
//JSON does not allow trailing commas.



