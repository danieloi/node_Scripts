//from 'Intro to Express' 'Express routing and CORS' & 'Express post bodies and params' video

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express(); //assigns returned instance of express app to var 'app'

var designerTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //'extended' only needs to be set to true if you have large amounts of nested POST data to parse

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
    next(); //you need to use next whenever you use custom middleware so the next middleware is called and a response can be sent
});

app.use(express.static('./dir_to_serve_static_files_from'));  //specifies the middleware we want to use. here we're using static

app.use(cors);

app.get('/dictionary-api', (req, res) => {
    res.json(designerTerms); 
    //Express decorated the request and response objects i.e. added some functionality to them to make things better.
    //the .json() function automatically stringifies our json object and sets up the necessary headers(with MIMETYPE) to 
    //reply with a json response. We had to set these up ourselves when we used the http module
});

app.post('/dictionary-api', (req, res) => {
    designerTerms.push(req.body);
    res.json(designerTerms);
});

app.delete('/dictionary-api/:term', (req, res) => {
    designerTerms = designerTerms.filter((definition) => { //will be invoked once for every term in the array
        //this callback function is called a predicate i.e. it should only return true or false
        return definition.term.toLowerCase() != req.params.term.toLowerCase();
    });
    res.json(designerTerms);
});

app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;