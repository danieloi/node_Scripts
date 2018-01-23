// COVERS READLINE

var readLine = require('readline');

var rl = readLine.createInterface(process.stdin, process.stdout); //an interface acts as an intermediary between the commmands that were passed in as arguments
var realPerson = {
    name: "",
    sayings: []
};

rl.question("Give the name of a real person ", (answer) => {
    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    
    rl.prompt();
    
    rl.on("line", (saying) => {
        realPerson.sayings.push(saying.trim());

        if(saying.toLowerCase().trim() === "exit"){
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave)`)
            rl.prompt();//displays previously set prompt
        }


    });
});

rl.on("close", () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});