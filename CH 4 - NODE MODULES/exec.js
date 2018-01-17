// EXECUTES THE EXEC FUNCTION
// It's useful for communicating with other processes on the system

var exec = require('child_process').exec;
// These are mac commands
// exec("open http://www.linkedin.com");

exec("ls", (err, stdout) => {
    if(err) {
        throw err;
    }

    console.log("Listing finished");

    console.log(stdout);
});

exec("git --version", (err, stdout) => {
    if(err) {
        throw err;
    }

    console.log("Git version Executed");

    console.log(stdout);
});