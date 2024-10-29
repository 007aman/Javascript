let timer = setInterval(() => {
    console.log('Hello')
}, 1000)
//how to stop this loop using setTimeout
setTimeout(function () {
    clearInterval(timer)
},4000)