//Where the ability of NodeJS to work with directories is demonstrated

var fs = require('fs');

fs.existsSync("created_W_directoryJS_file") ? 
    console.log('Directory Already There') 
    : 
    fs.mkdir("created_W_directoryJS_file", (err) => { 
        err ? 
            console.log(err)
            :
            console.log('Directory Created'); 
    });