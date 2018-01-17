var path = require("path");
var util = require("util");
var v8 = require("v8");

console.log(`CONSOLE.LOG VERSION: ${path.basename(__filename)}`);
util.log(`UTIL.LOG VERSION: ${path.basename(__filename)}\n\n\n`);

var dirUploads = path.join(__dirname, "www", "files", "uploads");

console.log(`${dirUploads}`);
util.log(` ${dirUploads}\n\n\n`);
util.log(`${v8.getHeapStatistics().malloced_memory}`);