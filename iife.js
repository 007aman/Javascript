//iife -> IIFE stands for Immediately-invoked Function Expression. 
///It’s a JavaScript function that runs as soon as it’s defined. 
//It has no name and is not stored in a variable.

(function (a, b) {
    console.log(a * b);
})(2, 4);

((a, b) => {
    console.log(a+b)
})(3,3)