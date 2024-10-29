let sumOfDigits = (nums) => {
    nums = Array.from(String(nums), Number)  //1
    // nums = String(nums).split('')         //2
    return nums.reduce((acc,ele) => {
        return acc += ele
    },0)
}
let sumOfDigit = sumOfDigits(1234)
console.log('sumOfDigit', sumOfDigit)