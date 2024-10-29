//JavaScript String Padding

let text = "5";
text = text.padStart(4,0);

text = text.padEnd(4,0);

//JavaScript Object Entries --> Object.entries() returns an array of the key/value pairs in an object:
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  
let text1 = Object.entries(person);

//JavaScript Object Values --> Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
let text2 = Object.values(person);

//JavaScript Async Functions
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
myDisplay();

//JavaScript Trailing Commas --> JavaScript allows trailing commas wherever a comma-separated list of values is accepted.In Array and Object Literals, Function Calls, Parameters, Imports and Exports.
// function myFunc(x,,,) {};
const myArr = [1,2,3,4,,,];
const myObj = {fname: John, age:50,};
