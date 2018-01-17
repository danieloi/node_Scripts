// DEMONSTRATES TIMING FUNCTIONS setInterval and setTimeout

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 100;
var percentWaited = 0;


const writeWaitingPercent = (p) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

console.log("Wait for it...");

var interval = setInterval(() => {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
    // console.log(`waiting ${currentTime/1000} seconds...`)
}, waitInterval);

setTimeout(() => {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n\n\nDone!\n\n");
}, waitTime);

process.stdout.write("\n\n");
// writeWaitingPercent(percentWaited);