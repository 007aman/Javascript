//classical inheritence: methods and properties from Base class can be put down or can be passed intodrived class

class Person{
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    welcome() {
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person{
    constructor(_name, _age, _classStrength) {
        super(_name,_age)
        this.classStrength = _classStrength
    }
    // inherit method
    test() {
        super.welcome();
    }
}

Person1 = new Person('Tony', 44)

Person1.welcome()
Teacher1 = new Teacher('Mark', 66, 100)

// console.log(Teacher1);
Teacher1.test();
