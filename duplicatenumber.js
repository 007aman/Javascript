var array = [11, 14, 11, 14];
function findDuplicates(arr) {
    return arr.filter((curValue, curIndex) => arr.indexOf(curValue) !== curIndex)
}

console.log(findDuplicates(array));

console.log(array.indexOf(14))