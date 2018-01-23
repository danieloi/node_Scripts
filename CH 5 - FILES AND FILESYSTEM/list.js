//from 'Listing directory files' and 'Reading files' video
//'Listing directory files' code is commented out

const fs = require('fs'); //the module required for file and directory operations
const path = require('path');

var files = fs.readdirSync('.'); //synchronously reads file directory content

//asynchronous commands don't return anything. They fire callbacks instead. Here's an example:
// fs.readdir('.', (err, ayncFiles) => {
//     if(err) {
//         throw err; //throwing errors terminates processes. logging them to the console doesn't. 
//     }
// });

// console.log('Reading files...'); // Because of the asynchronous nature of Node, this will be called before the command at line 5 runs

//All fs commands have synchronous and asynchronous versions. 
//We use synchronous versions when we're initializing our app and reading config details, etc
//Otherwise STAY AWAY from synchronous methods.

console.log(`Here are the files in the current directory: \n${files} \n`);

//Uses Node js to read all files in a directory and display all their content on the console


fs.readdir("./", (err, files) => { //can read the contents of text and binary files
    files.forEach((fileName) => { //iterator command that labels each item in array as fileName
        let file = path.join(__dirname, fileName); //specifies the file path 
        let stats = fs.statSync(file);//gets the file status
        if(stats.isFile()){ //checks if its a file
            fs.readFile(file, "UTF-8", (err, contents) => { //if you don't specify encoding, it'll read the file as binary and give the buffer class
                console.log(`Current File: ------${fileName.toUpperCase()}------ \n`);
                console.log(`-----CONTENT------ \n${contents}\n`);
                console.log(`\n-----END OF FILE------ \n\n`);
            })
        }
    })
})