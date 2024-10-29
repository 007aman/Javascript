//JavaScript String trimStart()  -> The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();
console.log(text2)

//JavaScript String trimEnd()  -> The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text3 = text1.trimEnd();
console.log(text3)

//JavaScript Object fromEntries()  -> The fromEntries() method creates an object from iterable key / value pairs.
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
    ];
    
const myObj = Object.fromEntries(fruits);
console.log(myObj)

//Optional catch Binding  -> From ES2019 you can omit the catch parameter if you don't need it:.
try {
    // code
    } catch {
    // code
    }

//JavaScript Array flat()  -> The flat() method creates a new array by flattening a nested array.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)


//JavaScript Array flatMap()  -> The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr2 = [1, 2, 3, 4, 5, 6];
const newArr2 = myArr2.flatMap(x => [x, x * 10]);
console.log(newArr2)

//Stable Array sort()  -> When sorting elements on a value, the elements must keep their relative position to other elements with the same value.
const myArr3 = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 },
    {name:"X08",price:120 },
    {name:"X09",price:120 },
    {name:"X10",price:120 },
    {name:"X11",price:120 },
    {name:"X12",price:130 },
    {name:"X13",price:130 },
    {name:"X14",price:130 },
    {name:"X15",price:130 },
    {name:"X16",price:140 },
    {name:"X17",price:140 },
    {name:"X18",price:140 },
    {name:"X19",price:140 }
  ];
  
  myArr3.sort( (p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
  });


//Revised JSON.stringify()  -> ES2019 revised the JSON stringify() method. Before 2019, JSON could not stringify character encoded with \.
let text = JSON.stringify("\u26D4");
console.log(text)

//Separator Symbols  ->  Line separators and paragraph separator symbols (\u2028 and \u2029) are now allowed in string literals.
// This is valid in ES2019:
let text34= "\u2028";
console.log(text34)

//Revised Function toString()  -> The toString() method returns a string representing the source code of a function.
function myFunction(a, b) {
    return a * b;
}
console.log(myFunction.toString())










