let camelCase = (str) => {
   if(str.length == 0) {
     return 'empty string'
   } else {
      let na = []
      let arr = str.split(' ')
      na.push(arr[0])
      for (let i=1;i<arr.length; i++) {
          let w = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
          na.push(w)
      }
      return na.join("")
   }
}
let str = 'hello world'
let cc = camelCase(str)

console.log(cc)