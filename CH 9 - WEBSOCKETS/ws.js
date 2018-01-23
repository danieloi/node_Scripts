//from 'Creating a WebSocket server' & 'Broadcasting messages with WebSockets' video

var WebSocketServer = require('ws').Server; //it's actually the 'Server' key of the module we want

var wss = new WebSocketServer({port: 3000}); //this will create a new WebSocket Server that runs in its own protocol
//we'll connected with 'WS://' as opposed to 'HTTP://'

wss.on('connection', (ws) => { //sets up listener for new connections
    //the individual websocket is passed as an argument
    ws.on('message', (message) => {
        if(message === 'exit') {
            ws.close();
        } else {
            wss.clients.forEach(client => {
                client.send(message);
            });
        }
    })
    ws.send('Welcome to Chat');
});