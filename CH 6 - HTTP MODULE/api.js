//from 'Serving JSON data' video

var http = require('http');

var data = require('./data/inventory');

http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/json'});
        res.end(JSON.stringify(data)); //end() takes in as it's argument, the content to send in the body of the response
    } else if (req.url === '/instock') {
        listInStock(res);
    } else if (req.url === '/onOrder') {
        listOnBackOrder(res);
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Whoops...Data not found');
    }
}).listen(3000);

console.log('Server listening on port 3000');

const listInStock = (res) =>{
    var inStock = data.filter((item) => { //iterator function filter returns a copy of the original array but
        // only with elements that pass the condition in the body of the function passed in as the argument
        // the original array remains unedited
        return item.avail === 'in stock';
    });
    res.end(JSON.stringify(inStock));
}

const listOnBackOrder = (res) => {
    var onOrder = data.filter((item) => {
        return item.avail === 'On back order';
    });

    res.end(JSON.stringify(onOrder));
}