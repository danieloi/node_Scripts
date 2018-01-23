//from 'Testing with mocha and Chai' & 'Asynchronous mocha testing' video
var https = require('https');


module.exports = {
    printName(person) { //object literal enhancements. THey're a new way of defining functions within an object literal available to us with ES6
        return `${person.last}, ${person.first}`;
    },

    loadWiki( person, callback) {
        var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
        https.get(url, (res) => {
            var body = '';

            res.setEncoding('UTF-8');

            res.on('data', (chunk) =>{
                body += chunk;
            });


            res.on('end', () => {
                callback(body);
            });
        });
    }
}