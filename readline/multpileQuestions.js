const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface(input, output);
askQuestion();

twoQuestions();

function askQuestion() {

    rl.question("what is your faviouriute question?\n", (answer) => {
        console.log("user answer \n", answer);
        rl.close()
    })
}

function twoQuestions() {
    rl.question("what is your friend name", (frndName) => {
        rl.question('what is color name', (clr) => {
            console.log(`your fav deatils color ${clr} and name ${frndName}`)
        })
    })
}
