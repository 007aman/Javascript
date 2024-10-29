// let minValue = (arr) => {
//     return new Promise((resolve,reject) => {
//         if(arr.length  == 1) {
//             resolve(arr[0])
//         } else {
//             let val = arr.reduce((acc, ele) => {
//                 if(acc>ele) {
//                     acc = ele
//                 }
//                 return acc
//             },arr[0])
//             resolve(val)
//         }
//     })
// }
// let arr = [4,5,6,-7,-9]
// minValue(arr)
// .then(res => {
//     console.log(res)
// })

// let sortAr = arr.sort()
// console.log('sortAr', sortAr)

// console.log(Math.min(...arr))

let arr = [4,5,6,-7,-9,-1]

let neArr = arr.sort((a,b) => a-b)
console.log(neArr)
console.log(arr)