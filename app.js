const log = require('./logger');
const EventEmitter = require('events');
const emitter = new EventEmitter();
const path = require('path');
const fs = require('fs');
var http = require('http');
var http = require('http');

//create a server object:

const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    
    if(req.url === '/api/clients/intermediaryCode') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(8080);

console.log('Listening on port 8080...');