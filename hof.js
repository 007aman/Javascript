//HOF->  A function that take another function as input and return a function itself is known as hof. 
//And function which pass to function is a callback function.


function x() {     // callback
    console.log('hof');
}
function y(x) {  // y is hof
    x()
}

let radius = [1,2,3,4]
function area(radius) {
   return Math.PI * radius * radius
}

const diameter = (radius) => {
    return 2 * radius
}


// console.log(radius.map(area));

function calculate(radius, logic) {
    let output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area))
console.log(calculate(radius, diameter))