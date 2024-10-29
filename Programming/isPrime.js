let isPrime = (num) => {
   let prime = true
    for(let i=2;i<=num/2;i++) {
        if(num%i == 0) {
            prime = false
            break
        }
    }
    return prime ? 'true': 'false'
}
console.log(isPrime(2))
console.log(3/2)