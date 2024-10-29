let vowels = ['a','e','i','o','u']
let cv = (str) => {
    str = str.split(' ').join('').toLowerCase()
    let count = 0
    for(let i of str) {
        if(vowels.includes(i)) count++
    }
    return count
}

let countVowels = cv('Brrrp')
console.log(countVowels)