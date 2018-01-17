//COVERS THE stdout AND stdin FUNCTIONS
//console.log actually uses the stdout and stdin methods
//you need to control your line spacing when you use these methods
// they provide ways for you to communicate with a running process
let questions = [
    "What's your name?",
    "What's your fav hobby?",
    "What's your preferred programming language?"
];

let answers = [];

const ask = (i) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write("   >   ");
};

process.stdin.on("data", (data) => {
    // process.stdout.write("\n" + data.toString().trim() + "\n");
    answers.push(data.toString().trim());
    
    (answers.length < questions.length) ? ask(answers.length) : process.exit();
});

process.on("exit", () => {
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
    process.stdout.write("\n\n\n\n");
});

ask(0);

