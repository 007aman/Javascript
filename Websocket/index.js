import express from 'express'
import {WebSocketServer} from 'ws'
import http from 'http'

const app = express()
const port = 8000

// const ht = http.createServer(app)
const server = app.listen(port,() => {
    console.log('server listing....')
})

const wss = new WebSocketServer({server})

wss.on('connection', (ws) => {
    ws.on("message", (data) => {
        console.log("data from client %s: ", data);
        ws.send('Thanks buddy')
    })
})