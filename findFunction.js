//Find return the first element of an array that satisfy the condition
/*Find*/
const transaction = [100,200,300,-400]
let firstWith = transaction.find(ele => {
    return ele>0
})
console.log('find', firstWith)

/*findIndex*/
let firstWithIndex = transaction.findIndex(ele => {
    return ele>0
})
console.log('findIndex', firstWithIndex)

//Some  => Return true if any value satisfy the condition

let some = transaction.some(ele => {
    return ele>0
})
console.log('some', some)

//every =>  Return true if every satisfy the condition
 
let every = transaction.every(ele => {
    return ele>0
})
console.log('every', every)
