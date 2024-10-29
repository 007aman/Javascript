
function getUniqueMorseCodeCount(words) {
    const morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".--.", "--",
        "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    
    let a = ''
    let b = words.join(' ')
    console.log('b', b)
    let count = 0
    let cc= []
    for(chr in b) {
    // console.log('chr',b.charCodeAt(chr))
        if(b[chr] !== ' ') {
            a += morseCodes[b.charCodeAt(chr)-97]; 
        } else {
            a += ' ';
        }
    }
    console.log('a', a)
    let newArr = a.split(' ');
    newArr.forEach(p => {
        if (cc.includes(p)) {
           
        } else {
            cc.push(p);
            count++;
        }
    })
    return count;

}

let ar = ["gin", "zen", "zen"];
console.log(getUniqueMorseCodeCount(ar));

// let abc = new Promise((res, rej) => {
//     setTimeout(() => {
//         console.log(2);
//         res()
//     }, 0)
// }); 

// async function cb() {
//     console.log(1);
//     await abc;
// console.log(3);

// }
// cb()
// setTimeout(() => {
//     console.log(2);
// }, 0);






