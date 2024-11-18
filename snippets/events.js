// node -3

const EventEmitter = require('events');
//creating instance of event
const emitter = new EventEmitter();

emitter.on('register', (...arg) => {
    console.log(arg);
});
console.log("event start");

setTimeout(() => emitter.emit('register'), 5000)
console.log("event end")


emitter.on("weatherFetch", (start, end) => {
    console.log("start", start);
    console.log("end", end);
});

emitter.emit('weatherFetch', "2024-10-01", "2024-11-01");

const fs = require('fs');
const fileWatcher = new EventEmitter();

fileWatcher.on('fileChanged', (filename) => { console.log(`${filename} has changed`); });
fs.watch('sample.txt', (eventType, filename) => {
    if (filename) {
        console.log(eventType, 29)
        fileWatcher.emit('fileChanged', filename)
    }
})