
var fs = require('fs');

//string templates honor whitespace

var md = `
    Sample Markdown Title
    =====================

    Sample subtitle
    ---------------

    *point
    *point
    *point

    Created from create.js file located in node scripts

`;

fs.writeFile("sample.md", md.trim(), (err, file) => {
    console.log('File Created');
})