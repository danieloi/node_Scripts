// demonstrates creating http servers without express (with vanilla node)
const http = require('http');

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type" : "text/plain"}); //MIME type identifies the type of file the server is going to send to the client
    res.write('Testing stuff out');
    res.end();//tells client we're done with the response.
});

myServer.listen(3000);
console.log('Go to localhost:3000 on your browser')