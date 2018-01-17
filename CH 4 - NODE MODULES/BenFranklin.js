// COVERS HANDLING EVENTS WITH EVENTEMITTER
var EventEmitter = require('events').EventEmitter;
// var events = require('events');

// var emitter = new events.EventEmitter();

// emitter.on('customEvent', (message, status) => { //this is a customEvent handler

//     console.log(`${status}: ${message}`);

// });

// emitter.emit('customEvent', ("Hello World", 200)); //this is us firing the event
class Person extends EventEmitter {
    constructor(name) {
        super(name);
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

ben.on('speak', (saying) => {
    console.log(`${ben.name} : ${saying}`);
});

george.on('speak', (saying) => {
    console.log(`${george.name} : ${saying}`);
});

ben.emit('speak', 'You may delay but time will not');
george.emit('speak', 'It is better to be alone than to be in bad company');