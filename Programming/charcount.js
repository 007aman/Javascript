let charCount = (str, ch) => {
    str = str.toLowerCase().split('')
    return str.reduce((acc, ele) => {
        if(ch.toLowerCase() == ele) {
            acc++;
        }
        return acc
    },0)
}
let cCount = charCount('MissiPI', 'i')
console.log('charCount', cCount)