console.log(typeof typeof 1);
console.log(typeof NULL);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof '12');
console.log(typeof 'ama');
console.log(typeof {});

// let a = 10;
// var a = 100;
// console.log(a)

var array = [1,2,3,4,5];
console.log(array.indexOf(2));
console.log([{name: "John"},{name :  "John"}].indexOf({name:"John"}));
console.log([[1],[2],[3],[4]].indexOf([3]));
console.log("abcdefgh".indexOf("e"));

function checkAge(data) {
    if (data === { age: 18 }) {
    console.log("You are an adult!");
    } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
   }
   
checkAge({ age: 18 });
   
num1=3;
function cal() {
console.log(num1);
num1=6;
num2=5;
num3=num2*num1;
console.log(num3);
}
cal();

function Add(){
    console.log(answer)
    var answer = 2
};
Add()

function fn(){
    return 4+5;
}
console.log(fn(3, 7));

//question
console.log(typeof (new (class { class () {} })))
