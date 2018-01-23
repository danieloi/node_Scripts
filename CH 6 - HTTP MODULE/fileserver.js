//from "Serving Files" video
//DEMONSTRATES THE ABILITY TO SERVE FILES WITH THE HTTP MODULE


var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req, res) => { //note that it actually doesn't need to be assigned to a variable like it was with http.js
    console.log(`${req.method} request for ${req.url}`);

    if(req.url == '/') {
        fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
        //unless we do the else if's below, only the index.html file can be sent by the server.
        //because we're using the http module that ships with node, we have to individually handle these details of requests
    } else if(req.url.match(/.css$/)) { //uses string function 'match' with a regex that checks if the string ENDS with .css(by using the dollar sign)

        var  cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, 'UTF-8'); //not using readFile because that has to wait for the entire file to be read

        res.writeHead(200, {'Content-Type' : 'text/css'});
        //You can pipe a read stream to a writeable stream
        //Our Response is a writeable stream
        fileStream.pipe(res); //this will stream the contents of our file to our response

    } else if(req.url.match(/.jpg$/)) {
        var imgPath = path.join(__dirname, 'public', req.url);
        var imgStream = fs.createReadStream(imgPath);

        res.writeHead(200, {'Content-Type' : 'image/jpeg'});

        imgStream.pipe(res);
    }
    
    else {
        req.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('404 File not Found');
    }
}).listen(3000); //we can also just chain on the listen command

console.log('File Server running on port 3000');