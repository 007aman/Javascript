const socket = io('http://localhost:8000');

const form = document.getElementById('send-container')
const messageInput = document.getElementById('messageInp')
const messageContainer = document.getElementById(".container")
const append = (message, position) => {
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const nam = prompt("Enter your name to join");
socket.emit('new-user.joined', nam);

socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right')
})