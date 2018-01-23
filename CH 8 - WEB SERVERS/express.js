//sample http server with express.js 
//BENEFITS:
//- No MIME types necessary 
//- easy routing

const express = require('express');//import express module which happens to be a function 
const app = express(); // invoke the function and store the returned instance of an express app in the const "app"
const dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);// sets port variable

//Start the server
const server = app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});

//Implements the GET route
app.get('/', (req, res, next)=> {
    res.send(`
        <h1>Welcome</h1>
        <p>Everything is really working for my good</p>
    `);
    //.send() takes its arguments and attaches them to the response body
    //.json() sends JSON-formatted responses. It also sends any JavaScript object passed into it
    //.send() gives a 200 status code by default
    //if you'd like to change that, use .status() to set the status code and chain .send() to it

});

app.get('/speakers', (req, res) => {
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

//this uses route parameters to find specific student
//the route parameter (id. they always begin with ":") is the key that will be added to req.params. It's value will be the value in the original req
app.get('/speakers/:speakerId', (req, res) => {
    const speaker = dataFile.speakers[req.params.speakerId];
    res.send(`
        <h1>${speaker.title}</h1>
        <h2>${speaker.name}</h2>
        <p>${speaker.summary}</p>
        `);
});


//bringing JSON into the sitch.