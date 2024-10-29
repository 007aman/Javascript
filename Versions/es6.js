//JavaScript let
var a = 10
{
    let a = 20
    console.log(a)
}
console.log(a)

//JavaScript const
var a = 10
{
    const a = 20
    console.log(a)
}
console.log(a)

//Arrow Functions -> Arrow functions allows a short syntax for writing function expressions. You don't need the function keyword, the return keyword, and the curly brackets.
const mul = (a,b) => a*b

//Object Destructuring -> When destructuring an object, you must use the same name for the variables as the corresponding object keys (names).The order of the keys (names) does not matter.
const {c,b} = {c: 'aman', b: 'ojha'}
console.log(b)

//The Spread (...) Operator -> The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)

//The For/Of Loop -> The JavaScript for/of statement loops through the values of an iterable objects.for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
let language = "JavaScript";

for (let x of language) {
    text += x + " ";
}
console.log(text)

//JavaScript Maps
const mp = new Map()
mp.set('f', 500)

//JavaScript Sets
const se = new Set()
se.add(44)
console.log(se)

//JavaScript Classes -> Use the keyword class to create a class.Always add a method named constructor():
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

//JavaScript Promises


//The Symbol Type -> Using Symbol() to create a unique identifiers
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
let id = Symbol('id');
person[id] = 140353;
console.log(person)

//Default Parameter Values
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
myFunction(5); // 

// Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

//String.includes()
let textw = "Hello world, welcome to the universe.";
console.log(textw.includes("world")) 

//String.startsWith()
textw.startsWith("Hello") // true or false

//String.endsWith()
textw.endsWith('universe')  // true or false

//Array entries()  //The entries() method returns an Array Iterator object with key/value pairs:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
    console.log(x)
}

//Array.from()  //The Array.from() method returns an Array object from any object with a length property or any iterable object.
Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

//Array keys()  //The keys() method returns an Array Iterator object with the keys of an array.
const keys = fruits.keys();

for (let x of keys) {
  console.log(x)
}

//Array Find   //
var array = [2,4,5,6,6,4]
let fa = array.find(fn)

function fn(val) {
    return val>0
}
console.log('find =>', fa)


//Array findIndex()
let fI = array.findIndex(fn)
console.log('findIndex => ', fI)


//New Number Properties


//The Number.isInteger() Method
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false

//The Number.isSafeInteger() Method
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false

//New Global Methods
//ES6 added 2 new global number methods:

//isFinite() -> The isFinite() Method  . The global isFinite() method returns false if the argument is Infinity or NaN.
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true
//isNaN()  -> The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:
isNaN("Hello");       // returns true


//Modules  -> Modules are imported in two different ways:
//Import from named exports
import { name, age } from "./person.js";

//Import from default exports
import message from "./message.js";

