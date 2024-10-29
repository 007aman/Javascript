// function x(n) {
//     return (5 * n * n - 5 * n + 2) / 2;
// }

// console.log(x(3))

//iterative ------
// function centralPentagonal(n) {
//     sum = 1;
//     for (let i = 1; i < n; i++){
//         sum += 5 * i;
//     }
//     return sum;
// }
// console.log(centralPentagonal(1))

//recursive------------
// var sum = 1;
// function centralPentagonal(n) {
//     if (n > 0) {
//         sum += 5 * (n - 1);
//         centralPentagonal(n - 1)
//     }
//     return sum;
// }
// console.log(centralPentagonal(5))
