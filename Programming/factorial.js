let factorial = (num) => {
    if(num > 0) {
        let fact = 1
        for(let i=1;i<=num;i++){
            fact = fact*i
        }
        return fact
    } else {
        return 0
    }
}

let factorialValue = factorial(3)
console.log('factorialValue', factorialValue)

let factorialRec = (n)  => { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorialRec(n - 1); 
    } 
} 
console.log("The factorial of given number is :" + factorialRec(5));
