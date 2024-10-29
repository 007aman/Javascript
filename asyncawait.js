function placeOrder(drink) {
    return new Promise((resolve, reject) => {
        if (drink === 'coffee') {
            resolve('Order placed')
        } else {
            reject('Other order not placed')
        }
    })
}
function processOrder() {
    return new Promise(resolve => {
        resolve('Order process')
    })
}
// async function myorder() {
//     try {
//         let result = await placeOrder('tea')
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }
// myorder();

placeOrder('tea').then(res => {
    console.log(res)
    let processorder = processOrder()
    console.log(processorder)
    return processorder
})
.then(resu => {
    console.log(resu)
})
.catch(err => {
    console.log(err)
})