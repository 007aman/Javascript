const findLongestWord = (str) => {
    if(str.trim().length == 0) {
        return false
    }
    words = str.split(" ")
    console.log('words', words)
    words = words.sort((a,b) => a.length-b.length)
    console.log('sort', words)
    console.log(words.at(-1))

    //Reduce Method
    let w = words
    let lStr  = w.reduce((acc, cur) => cur.length > acc.length ? cur : acc)
    console.log('reduceStr', lStr)
}

let str = findLongestWord("Watch Thapa Technical javascript course on youtube");