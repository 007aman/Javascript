// 'use strict'
// var a = 20;
// console.log(a);

// function a() {
//     console.log(this)
// }

// a();

//constructor

function car(_name, _company, _color) {
    this.name = _name
    this.company = _company
    this._color = _color

    this.drive = function () {
        console.log(`I am driving the ${this.name} car`)
    }
}

let car1 = new car('x4', 'BMW', 'Black')

let car2 = new car('xcent', 'Audi', 'Black')

// console.log(car1);
car1.drive();
// console.log(car2);
car2.drive();

