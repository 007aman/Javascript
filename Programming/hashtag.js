let generateHash = (str) => {
    str = str.trim();
    if(str.length > 280 || str.length == 0) {
        return false
    }
    let tag = str.split(" ")
    tag = tag.map(curEle => curEle.charAt(0).toUpperCase() + curEle.slice(1))
    return `#${tag.join("")}`
}
let hasTag = generateHash("my name is aman ojha")

console.log(hasTag)

