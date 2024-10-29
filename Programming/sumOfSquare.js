let sumOfSquare = (arr) => {
    if(arr.length) {
        return arr.reduce((acc,ele) => {
            return acc = acc+ele*ele
        },0)
    }
}
let sumOfSq = sumOfSquare([1,2,3])
console.log(sumOfSq)