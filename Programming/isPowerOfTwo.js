let isPowerTwo = (n) => {
    return new Promise((resolve, reject) => {
        for(let i=1;i<n;i++){
            if(2**i == n){
                resolve(true)
            }
        }
        resolve(false)
    })
}
isPowerTwo(4)
.then(res => {
    console.log(res)
})