//from "making a request" video
//DEMONSTRATES USING THE HTTP MODULE TO MAKE WEB REQUESTS

var https = require('https');
var fs = require('fs');

var options = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/George_Washington',
    method: 'GET'
};

var req = https.request(options, (res) => {
    var responseBody = "";

    console.log('Response from server has started.');
    console.log(`Server Status: ${res.statusCode} `);
    console.log('Response Headers: %j', res.headers);

    res.setEncoding('UTF-8');

    res.once('data', (chunk) => {
        console.log(chunk);
    });

    res.on('data', (chunk) => {
        console.log(`--chunk-- ${chunk.length}`);
        responseBody += chunk;
    });

    res.on('end', () => {
        fs.writeFile('george-washington.html', responseBody, function(err) {
           if (err) {
               throw err;
           }
           console.log('File Downloaded');
        });
    });
});

req.on('error', (err) => {
    console.log(`problem with request: ${err.message}`);
});

req.end();