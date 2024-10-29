
let obj={}
function charCount(str) {
    for (i = 0; i < str.length; i++) {
        if (obj[str[i]])
        {
           obj[str[i]] += 1
        }
        else
        {
           obj[str[i]] = 1    
        }
    }
    return obj;
}
let str = 'aabbccdddeeee';
console.log(charCount(str));

