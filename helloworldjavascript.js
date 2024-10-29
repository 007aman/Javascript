import http from 'http'
http.createServer((req, res) => {
     res.write('hello word')
     req.end()   
}).listen(3002)