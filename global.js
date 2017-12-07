//From video "The global object" from Lynda.com

import path from 'path';

let hello = "Hello World from Node js";

let justNode = hello.slice(17);

console.log(`Rock on World from $(path.basename(__filename))`); //plucks the file name of the script that's running

// console.log(__dirname);

// console.log(__filename);