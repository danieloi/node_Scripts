//Covers stdout and stdin 

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



ask(0);