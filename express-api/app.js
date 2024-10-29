const express = require('express')
const bodyParser = require('body-parser');
const EventEmitter = require('events')
const app = express()
const port = 3001

const event = new EventEmitter()

app.use(bodyParser.json());

event.on('check', () => {
    console.log('check event trigger')
})

let getFun = (req, res) => { 
    console.log('get function api')
    // res.send('testing')
    event.emit('check')
    res.status(200).json({message: 'Get APi'})
}

let postFun = (req, res) => {
    console.log(req.body)
    res.status(200).json({message: 'POST API'})
}

app.get('/get',getFun)
app.post('/post',postFun)

app.listen(port,() => {
    console.log('listing server')
})

// const app = express()
// const port = 3000
// app.get('/', () => {
//     console.log('get')
//     res.status(200).json({})
// })

// app.listen(port, () => {
//     console.log('Connected')
// })

