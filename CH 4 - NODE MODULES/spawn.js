// DEMONSTRATES THE SPAWN MODULE
// It's better for async commands as opposed to exec that's better suited to synchronous commands

var spawn = require('child_process').spawn;

var cp = spawn("node", ["alwaysTalking"]);

cp.stdout.on("data", (data) => {//stdout is a valid property because the spawn command creates a process.
    console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", () => {
    console.log("Child Process has ended");
    process.exit();
});

setTimeout(() => {
    cp.stdin.write("stop");
}, 4000);

