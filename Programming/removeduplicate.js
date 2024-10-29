let rmdup = (arr) => {
   if(arr.length) {
      return [...new Set(arr)]
   } else {
      return arr
   }
}
let removeDuplicate = rmdup([1,2,3,4,5,4,3,2,1])
console.log('removeDuplicate', removeDuplicate)