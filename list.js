//Uses Node js to read all files in a directory and displays all their content onto the console
const fs = require('fs');
const path = require('path');

fs.readdir("./", (err, files) => {
    files.forEach((fileName) => {
        let file = path.join(__dirname, fileName); //specifies the file path 
        let stats = fs.statSync(file);
        if(stats.isFile()){
            fs.readFile(file, "UTF-8", (err, contents) => {
                console.log(contents);
            })
        }
    })
})