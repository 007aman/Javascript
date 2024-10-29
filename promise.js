//how to produce a promise

let myPromise = new Promise(function (resolve, reject) {
    const a = 4
    const b = 4
    setTimeout(() => {
        if (a === b) {
            resolve('The values is equal')
        } else {
            reject('Not equal')
        }
    }, 2000)
})

console.log(myPromise);

myPromise.then(result => {
   console.log(result)
}).catch(err => {
    console.log(err)
})

// function placeOrder(drink) {
//     return new Promise((resolve, reject) => {
//         if (drink === 'coffee') {
//             resolve('Order for coffee received')
//         }
//         else {
//             reject('Order rejected')
//         }
//     })
// }

// function processOrder(order) {
//     return new Promise(resolve => {
//         console.log('Order is being processed')
//         resolve(`${order} is served`)
//     })
// }


//Chaining of Promise
// placeOrder('coffee').then(orderPlaced => {
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// })
// .then(processOrder => {
//     console.log(processOrder)
// })

//Async Await

// async function serveOrder() {
//     let orderPlaced = await placeOrder('coffee')
//     console.log(orderPlaced)
//     let processedOrder = await processOrder(orderPlaced)
//     console.log(processedOrder)
// }

// serveOrder()


//Promise Code

let mypromise = new Promise((resolve, reject) => {
    let a = 4;
    let b = 4;
    setTimeout(() => {
        if (a === b) {
            resolve('true')
        }
        else {
            reject('false')
        }
    },2000)
})

// console.log(myPromise)
mypromise.then(result => {
console.log(result)
}).catch(err => {
console.log(err)
})



let test = new Promise((resolve,reject) => {
    resolve('AMAN')
})
test.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})