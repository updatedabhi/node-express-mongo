const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on('help', (help)=> {
  console.log('Help Help Help kya help chahiye');
  console.log(help)
})

myEventEmitter.emit('help', 'Abhishek kahan hai');