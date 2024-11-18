const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('example.txt');

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Recognize all instances of CR LF as a single line break
});

createpromise(question){
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

async function main() {
    const name = await askQuestion('What is your name? ');
    const age = await askQuestion('How old are you? ');
    console.log(`Hello, ${name}. You are ${age} years old.`);

    // Close the interface
    rl.close();

}

main();