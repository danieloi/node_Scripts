//from 'Creating WebSockets with Socket.IO' video

//you first create a new socket instance on the client side using the 'io' function 
//you send it a link to where socketIO is running on the server as opposed
//to the websocket server
var socket = io('http://localhost:3000'); 

socket.on('disconnect', () => {
    setTitle('Disconnected');
});

socket.on('connect', () => {
    setTitle('Connected to Chat!');
})

socket.on('message', (message) => {
    printMessage(message);
})

document.forms[0].onsubmit = () => {
    var input = document.getElementById('message');
    printMessage(input.value);
    socket.emit('chat', input.value); //sends a 'chat' event to the server where socketIO on there will handle it
    input.value = '';
}

const setTitle = (title) => {
    document.querySelector('h1').innerHTML = title;
}

const printMessage = (message) => {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}