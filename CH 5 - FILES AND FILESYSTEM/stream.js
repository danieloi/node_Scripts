// DEMONSTRATES READAVLE

var fs = require('fs');

fs.readFile("file_to_read", "UTF-8", (err, file_content) => { //reads the entire file before invoking the call back and passing the file contents
    //buffers the entire file in one variable which could create latency and impact memory. a readable stream prevents this from happening
    console.log(`File Read ${file_content.length}`);
});

console.log("Reading Files");

var stream = fs.createReadStream("file_to_read", "UTF-8"); //creates a readable stream

var data = ""; //variable we'll concatenate the content of the file we're streaming

stream.once("data", () => {//uses the once method to fire this callback...once. Only one time
    console.log("\n\n\n");
    console.log("Started Reading the File");
    console.log("\n\n\n");
});


stream.on("data", (chunk_of_file) => { //listens for data events. when the event is raised, we know we have a small chunk of the file
    process.stdout.write(`Length of current chunk: ${chunk_of_file.length} | `);

    data +=chunk_of_file
});

stream.on("end", () => {    //listens for the end event
    console.log("\n\n\n");
    console.log(`Finished Reading the File. Length of File: ${data.length}`);
    console.log("\n\n\n");
});