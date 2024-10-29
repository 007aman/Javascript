function abc() {
    console.log(this)
}
// abc()

var cdf = () => {
    console.log(this)
}
console.log('cdf',cdf())

//this in global space
console.log(this)  // global or window

//this inside a function
function x() {
    //strict mode -> window
    //non strinct mode -> undefined
    console.log(this)
}
x()

//this inside a object's method
const obj = {
    a: 10,
    x: function(){
        console.log(this)
    }
}
obj.x() // same object output = {a:10, x: f}

//call apply bind methods (sharing methods)
const obj1 = {
    name: "Diwali",
    getName: function() {
        console.log(this.name)
    }
}

const obj2 = {
    name: "Holi"
}

obj1.getName.call(obj2)  //value of this (obj2)

//this inside arrow   --> call window object
const obj3  = {
    x: 10,
    y: () => console.log(this)
}

const obj4  = {
    x: 10,
    y: function () {
        const z = () => {
            console.log(this)
        }
        z()
    }
} // this will call their lexical scope so output is => {x:10, y:f}


//this inside DOM elements = reference to HTMLElement
