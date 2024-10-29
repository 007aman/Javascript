let chainingArray = [
    { name: "H", age: 47, gender: "F" },
    {name: "G", age: 40, gender: "M"},
    { name: "F", age: 25, gender: "M" },
    { name: "E", age: 30, gender: "F" },
    {name: "A", age: 31, gender: "F"},
    {name: "B", age: 33, gender: "M"},
    {name: "C", age: 36, gender: "F"},
]

let maleArr = chainingArray.filter(n => {
    return n.gender=='M'
}).map(male => {
    return male.age
})
console.log(maleArr);