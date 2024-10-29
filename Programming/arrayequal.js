let arrayEqual = (ar1, ar2) => {
    let val = false
    if(ar1.length  == ar2.length) {
      val = ar1.every((ele, index) => ele == ar2[index])
    }
    return val
}
let arrayIsEqual = arrayEqual([1,2,3], [1,2,3])
console.log(arrayIsEqual)