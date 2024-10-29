let findMax = (...arr) => {
//    return Math.max(...arr)
   let re = arr.sort((a,b) => b-a)
   return re.at(0)
}
let maxValue = findMax(10,56,78,98)
console.log('max', maxValue)