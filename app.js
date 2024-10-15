console.log("app.js file was consoled");
const readline = require('readline');
const { stdin: input, stdout: output } = require('node:process');

//creating interface with input and output
const rl = readline.createInterface({ input, output });
rl.question('What do you think of Node.js?\n', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}\n`);
    rl.close();
})

rl.line('line',(line)=>{
    console.log(`line trigger${line}`)
})

rl.on("close", () => {
    console.log("triggered close")
    // process.exit(0)
})

// function trigger(){

// }
rl.on('history', (history) => {
    console.log(`Received: ${history}`);
}); 