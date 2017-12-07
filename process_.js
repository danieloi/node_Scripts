//Teaches the process.argv array 

const grab = (flag) => {
    let index = process.argv.indexOf(flag); //finds index where flag occured in argv array
    return (index === -1) ? null : process.argv[index + 1]; //if the flag exists, pick the content of the flag which always resides in the nest location in the array
};

let greeting = grab('--greeting');
let user = grab('--user');

if (!user || !greeting) {
    console.log('It\'s either there\'s no user or there\'s no greeting');
} else {
    console.log(`Welcome ${user}, ${greeting}`);
}

