//For loop
arr = [1, 2, 3, 4]
let squr = [];
for (var i = 0; i < arr.length; i++){
    squr.push(arr[i]*arr[i])
}
// console.log(squr)

// While Loop
/*
A while loop evaluates the condition inside the parenthesis()
*/
// Print 1 to 10
var i=0
while (i < 10) {
    console.log(i)
    i++;
}
//do while
do {
    // console.log('do ->', i)
    i++
} while (i <= 10)

// For-In Loop
// the for-in loop allows you to loop through the properties of object
// the statement of code found within the loop body will be executed once for each property of the object

var colors = {
    primary: 'Red',
    secondary: 'Blue',
    tertiary: 'White'
}
for (let color in colors) {
    console.log(color+ '->' + colors[color])
}

var alphs = ['A', 'B', 'C']
for (var alph in alphs) {
    console.log(alph+ '->' + alphs[alph])
}

//For
//the for statement creates a loop iterating over iterable objects
var scores = [50, 60, {'a': 70}]
for (var score of scores) {
    console.log(score)
    console.log(score?.a || null)
}

//method entries()
for (var [index, score] of scores.entries()) {
    console.log(index+'=>'+score)
}

//string
var ch = 'aman'
for (var c of ch) {
    // console.log(c)
}


/* Testing Mode */
// let str = 'amanojha', neSt=''
// if(str.length > 0) {
//     for(let i = str.length-1;i>=0;i--) {
//         neSt += (str[i])
//     }
// }
// console.log(neSt)