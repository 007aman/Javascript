//reduce :  return single value not (array or object)

let arr = [1, 2, 3, 44, 5, 6]

let sumAll = arr.reduce((acc,n) => {
    let updatesum = acc + n
    return updatesum
}, 0)

// sum or max
console.log(sumAll);

//max with reduce

let max = arr.reduce((acc, n) => {
    if (acc < n) acc = n
    return acc
}, 0)

console.log(max)

let users = [
    { firstname: "H", lastname: "F", age: 47, gender: "F" },
    { firstname: "F", lastname: "H", age: 25, gender: "M" },
    { firstname: "E", lastname: "I", age: 30, gender: "F" },
    {firstname: "A", lastname: "J", age: 31, gender: "F"},
    {firstname: "B", lastname: "K", age: 30, gender: "M"},
    {firstname: "C", lastname: "L", age: 47, gender: "F"},
]

// Get All fullname

let fullname = users.map(n => {
    return n.firstname+' '+ n.lastname
})

console.log(fullname)

// Get Same age Count
// {26: 2, 44: 2}

let getAge = users.reduce((acc, cur) => {
    if (acc[cur.age]) {
        acc[cur.age] = acc[cur.age] + 1
    } else {
        acc[cur.age] = 1
    }
    return acc
}, {})

console.log(getAge)

// firstname of all users whoes age is 30

let firstName = users.filter(n => n.age==30).map(cur => cur.firstname)
console.log(firstName)

const output = users.reduce(function (acc, curr) {
    if (curr.age < 30)
        acc.push(curr.firstname);
    return acc;
}, []);

console.log(output)