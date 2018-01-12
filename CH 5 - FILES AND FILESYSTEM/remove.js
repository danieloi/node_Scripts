// DEMONSTRATES DELETING FILES

var fs = require('fs');

//synchronous request throw errors and therefore termiate processes if there's an error
//to avoid these, add try-catch blocks

try {
    fs.unlinkSync("file_to_remove.js"); //"unlink" is reminiscent of the crash course computer science explanation on how computers delete files by simply specifying them as overwritable
} catch (error) {
    console.log(error);
}


fs.unlink("file_to_remove.js", (err) => {
    err ? console.log(err) : console.log("***enter name of file here*** has been removed");
});