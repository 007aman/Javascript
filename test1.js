// let x =1;
// function parent() {
//     function child() {
//       console.log(x)
//     }
// }
// console.log(par())

// let x = 1;

// function parent() {
//     function child() {
//         console.log(x);
//         return x
//     }
//     return child; // Return the child function
// }

// const childFunction = parent(); // Get the child function from parent
// // childFunction(); // Call the child function
// console.log(childFunction())
function test(value) {
    return new Promise((resolve, reject) => {
        const a = test1(value);
        const b = test2(value);
        const c = a + b;
        if (c === 3) {
            resolve(c);
        } else {
            reject("Not applicable");
        }
        console.log(a);
        console.log(b);
    });
}

const test1 = value => value * 1;
const test2 = value => value * 2;
const value = 1;
console.log('test1', test1(value))
console.log('test2', test2(value))
test(value).then(data => data + 5)
.then(data => console.log(data * 4))
.catch(err => console.log(err));
