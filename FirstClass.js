a();
//b();  // this is difference between statement and expression hoisting b trated as vaiable not function(type error)

// 1. Function Statement && Function declaration
function a() {
    console.log('call a');
}

// 2. Function Expression
var b = function b() {
    console.log('call b')
}

// 3. Function declaration
// Same as statement nothing difference

// 4. Anonymous Function
var b = function() {
    console.log('call b')
}

// 5. Named Function Expression
var b = function xyz() {
    console.log(xyz)
}
b();
//xyz(); -> Reference Error Not defined outside

// 6. Difference between Parmeters and Arguments
var b = function(param1, param2)  { // These value are parameters(lables,identifiers)
    console.log()
}

b(1, 2); // These value are Argument

// 7. First Class Function == First Class Citizens
 // The ability to use of function as value to a function and can pass to as argument to another function and cab be return as function
 // is kown as First class function.
 
var c = function(param1)  { // These value are parameters(lables,identifiers)
    console.log(param1)
    return function () {

    }
}

c(function (){ });
function wx() {
    
}
c(wx);
