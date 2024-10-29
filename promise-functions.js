/**
 * Promise All
 * Promise.all()
 */
// Promise.all([p1,p2,p3])
/** 
If p1 takes 3s
If p2 takes 2s
If p3 takes 1s

1. Promise.all  => return [val1, val2, val3]  => it takses 3s total to return vals
wait for all of them to finish

2. Promise.all =>  If any promise reject then whole promise get return reject dose not matter which one , first which reject then Promise.all return reject
it will not wait for other promises
*/

/*-------------------------------------*/

/**
 * Promise All Settled
 * Promise.allSettled()
 */
/**
 1. Wait for all promise to settled return [val1, err2, val2]
 */

/*-------------------------------------*/

/**
 * Promise Race
 * Promise.race()
 */
/**
 * 1. Result of first settled promise either resolve or reject any of them first
 * return (val1)
 * return (err1)
 */

/*-------------------------------------*/

/**
 * Promise Any
 * Promise.any()
 */
/**
 * 1. Wait for first success  [val2]
 * If all fails then return all error [err1, err2, err3]==> it provide aggregate error
 */

/**  ---------------------------------------Codes--------------------------------- */
/**
 * Promise.all()
 */
let p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('p1 success')
    }, 3000)
})
let p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('p2 success')
    }, 2000)
})
let p3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject('p3 fail')
    }, 2000)
    // setTimeout(() => {
    //     resolve('p3 success')
    // }, 1000)
})
Promise.all([p1,p2,p3])
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err)
})

/**
 * Promise.allSettled()
 */
Promise.allSettled([p1,p2,p3])
.then(res => {
    console.log('all settled', res)
})
.catch(err => {
    console.err(err)
})

/**
 * Promise.race()
 */
Promise.race(([p1,p2,p3]))
.then(res => {
    console.log('race', res)
})
.catch(err => {
    console.error(err)
})

/**
 * Promise.any()
 */
Promise.any([p1,p2,p3])
.then(res => {
    console.log('any', res)
})
.catch(err => {
    console.error(err)
})