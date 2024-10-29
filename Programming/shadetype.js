/** equilateral, isosceles, scalene */
let shadeType = (...arr) => {
    let count =1      
    for(let i=0;i<arr.length-1;i++){
       if(arr[i] == arr[i+1]){
         count++;
       }
    }
    console.log('count',count)
    if(count == 3) {
        return 'equilateral'
    } else if(count == 2) {
        return 'isosceles'
    } else {
        return 'scalene'
    }
}
let shade = shadeType(3,3,3)
let shade2 = shadeType(3,2,3)
console.log('shade', shade)
console.log('shade2', shade2)
