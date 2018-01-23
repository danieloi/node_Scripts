//from 'Colleting POST data' video



var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type' : 'text/html'});

        fs.createReadStream('./par_dir_for_form_file/form_file.html', 'UTF-8').pipe(res);
    } else if (req.method === 'POST') {

        var body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });
        
        req.on('end', () => {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            //showing hwo the post data is url-encoded was very insightful
            //I had the question as to why a module like body-parser was even necessary. Now I know!
            res.end(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Your Form</h1>
                        <p>${body}</p>
                    </body>
                </html>
            `);
        });
    }

}).listen(3000);

console.log('Form server listening on port 3000');