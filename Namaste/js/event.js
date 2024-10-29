const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}

// Instantiate the custom event emitter
const myEmitter = new MyEmitter();

// Register event listener
myEmitter.on('event', () => {
    console.log('Event occurred');
});

// Emit the event
myEmitter.emit('event');