//from 'Creating WebSockets with Socket.IO' video
//Socket.IO is preferred to using regular websockets because
//there's limited support for websockets in older browsers
//as a result, socketIO increases your reach
//it helps out older browsers by falling back to long-polling when websockets aren't supported
//it also works out if websockets aren't supported by your hosting company because 
//of the same fall-back


var express = require('express');
var http = require('http'); //for socketio

var app = express();

var server = http.createServer(app).listen(3000); 
//we send the express app as opposed to building the server with a callback function
//this will create an HTTP server based on my Express application

var io = require('socket-io')(server);
//with socket.io we don't actually connect to the pure websocket
//socket.io handles all the connections for us

app.use(express.static('/public')); //this serves our files from the public folder

io.on('connection', (socket) => { //listens for an incoming socket 'connection' event from client socket

    socket.on('chat', (message) => { //listens for 'chat' event from a client socket
        socket.broadcast.emit('message', message); //'broadcast' emits  the passed event (in this case, 'message') to EVERY connected socket
    });

    socket.emit('message', 'Welcome to Chat!'); // as soon as a client connects we emit this 'message' event to the client
});

console.log('Starting Socket App - http://localhost:3000');