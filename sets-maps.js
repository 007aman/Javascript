//Sets -> A list of values but this list cannot contain any duplicates.Sets are Objects
//Maps ->  A map is nothing more than a collection of key value pairs.

let mySet = new Set();
let ob1 = {}
let ob2 = {}
mySet.add('Hello');
mySet.add(1);
mySet.add(2);
mySet.add(ob1);
mySet.add(ob2);
console.log('mySet', mySet)
// console.log('mySet-size', mySet.size)

// let newSet = new Set([1, 2, 3, 4, 4, 4, 4]);
// console.log('newSet', newSet)
// console.log('newSet-size', newSet.size)

// let chainSet = new Set().add('hello').add('world!')
// console.log('chainSet', chainSet.size)

// console.log(newSet.has(1))
// console.log(newSet.delete(1))


/*
WeakSets -> It can store only object references and not primitive values and the object referecnces are weak.
            Weak set allows for garbage collection
            Advantage: Memory is handled properly with weak sets
*/

let set = new WeakSet();
let key = {}
set.add(key)
console.log('weak-sets', set.has(key));
key = null;
console.log('weak-sets', set.has(key));


//Map -> 
let myMap = new Map();
myMap.set('fname', 'Aman');
myMap.set('age', '30');
console.log(myMap.get('fname'))

let obj1 = {};
let obj2 = {};
myMap.set(obj1, 'Ojha');
myMap.set(obj2, 20);

console.log(myMap.get(obj1))
console.log(myMap.size)
console.log(myMap.delete('fname'))
console.log(myMap.has('fname'))
console.log(myMap.size)
myMap.clear();
console.log(myMap.size)

let mmp = new Set()
mmp.add('Shiv')
console.log(mmp)

//WeakMap
let wm = new WeakMap();

let obj = {'name': 'Aman'}
wm.set(obj, 'aman')
console.log('wm', wm)
console.log(wm.has(obj))




