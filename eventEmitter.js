var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('someEvent',function(msg){
	console.log(msg);
})

eventEmitter.emit('someEvent','testing event emitter');