//from 'Creating a WebSocket server' & 'Broadcasting messages with WebSockets' video

var ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    setTitle('Connected to Chat');
}

ws.onclose = () => {
    setTitle('Disconnected');
}

ws.onmessage = (payload) => {
    printMessage(payload.data);
}


document.forms[0].onsubmit = () => {
    var input = document.getElementById('message');
    ws.send(input.value);
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