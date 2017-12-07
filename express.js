//sample http server with express.js 
//BENEFITS:
//- No MIME types necessary 
//- easy routing

const express = require('express');
const app = express();
const dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);// sets port variable



app.get('/', (req, res) => {
    const info = '';
    dataFile.speakers.forEach(item => {//template strings with back ticks (``) allow strings to span multiple lines
        info += `
        <li>
            <h2>${item.name}</h2>
            <p>${item.summary}</p>
        </li>
        `
    });

    res.send(`
        <h1>All things are working for my good</h1>
        ${info}
        `);
});

const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});

//bringing JSON into the sitch.