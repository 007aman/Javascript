// A function is block of code that performs a specific task

function add(a, b) {
    console.log(a+b)
}// function declaration and definination

add(2, 4) //Arguments

//What is expression -> set of statements

var a = 2 + 3
console.log(a)

var add = function (a, b) {  //Anonymous function
    console.log(a+b)
}
add(3, 4)


// Pure functions :-> Given the same input always return the same output.Produces no side effects.

function addPure(x,a) {
    return x + a;
}

console.log(addPure(x,a))


function add(a, b) { /* parameter */
    console.log(a+b)
}

add(x, y)  /* Argument */