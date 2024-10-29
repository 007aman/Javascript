let isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "")
    let nstr = str.split('').reverse().join('')
    console.log('nstr', nstr)
    if(str == nstr) {
        return true
    } else {
        return false
    }
}
let palindrome = isPalindrome('amma')
let palindrome2 = isPalindrome("A man, a plan, a canal, Panama")
console.log('palindrome2', palindrome2)