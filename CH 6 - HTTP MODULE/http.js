// demonstrates creating http servers without express (with vanilla node)
const http = require('http');
//from "building a web server" video
//DEMONSTRATES THE HTTP SERVER


const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type" : "text/plain"}); //MIME type identifies the type of file the server is going to send to the client
    res.write('Testing stuff out');
    //end() takes in as it's argument, the content to send in the body of the response
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>HTML Response</title>
            </head>
            <body>
                <h1>Serving HTML Text</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);//tells client we're done with the response.
});

server.listen(3000);
console.log('Server listening on port 3000');