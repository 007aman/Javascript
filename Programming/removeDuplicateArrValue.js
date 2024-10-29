let arr = [1,2,3,3,2,1]

let neArr = new Set(arr)
console.log([...neArr])
let newArr = arr.filter((ele, index) => arr.indexOf(ele) == index)

console.log(newArr)

// let neArr = []
// for(let i=0;i<arr.length;i++){
//     if(!neArr.includes(arr[i])) neArr.push(arr[i])
// }
// console.log(neArr)

let reArr = arr.reduce((acc, ele) => { 
    if(!acc.includes(ele)) {
        acc.push(ele)
    }
    return acc
},[])

console.log(reArr)