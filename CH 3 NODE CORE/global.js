//From video "The global object" from Lynda.com
// Contrary to the way things are in the browser, where "window" is the global object, in Node "global" is the global object
// things we can use without requiring anything are said to belong to the "global namespace"
// examples include the console object
//in the browser, variables you create are automatically added to the global object. That doesn't happen here
//Every nodeJS file we create is in it's own module. All variables created are scoped only to that module. That's why we can't use global.variablename like we would be able to in the browser

import path from 'path';

let hello = "Hello World from Node js";

let justNode = hello.slice(17); //slice is an array method and it works because strings are arrays of characters

console.log(`Rock on World from $(path.basename(__filename))`); //plucks the file name of the script that's running. console.log can also be called global.console.log

console.log(__dirname); //"__dirname" is a reference to the current directory we're in. It holds the path excluding the file name

console.log(__filename); //"filename" is a reference to the current node module we're using. It holds the full path of the module including the file name

console.log(`${path.basename(__dirname)}`);
