var events = require('events');

//can be used for grouping event emitters on people
var utils = require('util');


var myEvent = new events.EventEmitter();

var Person = function(name){
    this.name = name;
}

//Person inherits EventEmitter
utils.inherits(Person,events.EventEmitter);

var x = new Person('x');
var y = new Person('y');
var z = new Person('z');
var people = [x,y,z];


//each person listens for speak event and console logs person saig msg
people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + 'said : ' + msg);
    });
});

//person object emitting event and passing msg = hello
x.emit('speak','hello');