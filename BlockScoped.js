let b = 100;
var a = 200; //shadowing
const c = 77;
{ 
    var a = 10;
    b = 2022;
    // c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
// console.log('a=>',a);
// console.log('b=>',b);
// console.log('c=>',c);

let abc = [1, 2, 3, 4, 5, 6];
let xyz = abc;
abc[0] = 9
console.log(xyz)
abc = []
console.log(abc)
console.log(xyz)