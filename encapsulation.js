class ABC{
    constructor(_name, _age) {
        let name = _name  //encapsulation with define variable
        this.age = _age

        this.getName = function () {
            return name
        }

        this.setName = function (n) {
            name = n
        }
    }
}

a = new ABC('Ojha', 26)
// a.setName('AmanOjha');
console.log(a.getName());