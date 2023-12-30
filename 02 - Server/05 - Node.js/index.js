const supervillains = require("supervillains");
var randomSupervillain = supervillains.random();
//console.log(randomSupervillain);

const logFtn = require("./log")
//logFtn.log("absolute");

const fs = require('fs');
fs.readdir('./', function (err, data) {
     if (err) console.log(err);
     else console.log("data"+data);
});

const EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
     logFtn.log(arg);
})

//emitter.emit('messageLogged', 'absolute');
var a = emitter.emit('messageLogged').name;
console.log("a"+a);