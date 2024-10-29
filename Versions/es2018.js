//JavaScript Asynchronous Iteration --> With asynchronous iterables, we can use the await keyword in for/of loops.
// for await () {}


//JavaScript Promise.finally --> The finally() method of the Promise object is used to return a callback when a Promise is settled (either fulfilled or rejected).

// Define the Promise
let task = new Promise((resolve, reject) => {
    setTimeout(() => {

        // Reject the Promise
        reject("Promise has been rejected!");
    }, 2000);
});

task
    .then(
        (data) => {
            console.log(data);
        },

        // Handle any error
        (error) => {
            console.log("Error:", error);
        }
    )

    // Specify the code to be executed 
    // after the Promise is settled
    .finally(() => {
        console.log(
            "This is finally() block that is " +
            "executed after Promise is settled"
        );
    });

//Output:

// Error: Promise has been rejected!
// This is finally() block that is executed after Promise is settled


//JavaScript Object Rest Properties  -> This allows us to destruct an object and collect the leftovers onto a new object:
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }



//New JavaScript RegExp Features
    // ECMAScript 2018 added 4 new RegExp features:

    // Unicode Property Escapes (\p{...})
    // Lookbehind Assertions (?<= ) and (?<! )
    // Named Capture Groups
    // s (dotAll) Flag

//JavaScript Threads

    // In JavaScript you use the Web Workers API to create threads.

    // Worker threads are used to execute code in the background so that the main program can continue execution.

    // Worker threads run simultaneously with the main program. Simultaneous execution of different parts of a program can be time-saving.

// JavaScript Shared Memory

    //Shared memory is a feature that allows threads (different parts of a program) to access and update the same data in the same memory.

    //Instead of passing data between threads, you can pass a SharedArrayBuffer object that points to the memory where data is saved.



