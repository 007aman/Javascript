// class abc {
//     constructor(_name, _age) {
//         this.name = _name
//         this.age = _age
//     }

//     welcome() {
//         console.log(`My name is ${this.name} and age is ${this.age}`)
//     }
// }

// person1 = new abc('Steve', 45);
// person1.welcome();

function createCar(_name, _company){
    this.name = _name
    this.comapny = _company
}

let obj = new createCar('X4', 'Oodi')

console.log('obj', obj)