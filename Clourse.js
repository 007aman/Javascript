// A function bind together with in lexical env.
// A function along with its lexical scope forms a closure.
function x() {
    const a = 2;
    function y() {
        var b = 4;
        function w() {
            console.log(a,b);
        }
        w();
    }
    y();
}
x();
var z = x();
console.log('z', z);
// z();
// function a(y) {
//     function b() {
//         console.log(i,y);
//     }
//     const i=8;
//     b();
// }
// var i = 199;
// a(108);

function counter()
{
    var count = 100;
    function increment()
    {
        count++;
        console.log(count);
    }
    increment();
}
counter();
counter();

function Counter()
{
    var count = 0;
   this.incrementCounter = function () {
       count++;
       console.log(count);
   }
   this.decrementCounter = function () {
    count--;
    console.log(count);
   }
}
let counter1 = new Counter();
counter1.incrementCounter();
counter1.decrementCounter();


//Disadvantage Of Clourse
// 1. Over consume of memory

// Garbage Colllector && Clourse Relation

// Use of clourse
//1. Module design pattern
//2. Curring
//3. Function like once
//4. Memoize
//5. Mainting state in the async world
//6. setTimeouts
//7. Iterators


