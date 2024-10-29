const io = require('socket.io')(8000)

const users = {}
io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        users[socket.io] = name;
        socket.broadcast.emit('user-joined', name)
    })

    socket.on('send', name => {
        users[socket.io] = name;
        socket.broadcast.emit('receive', {message: message, name: users[socket.io]})
    })
})