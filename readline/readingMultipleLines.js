const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter lines of text (empty line to finish):');

const lines = [];

// Listen for lines of input
rl.on('line', (input) => {
    if (input.trim() === '') {
        // End on empty line
        rl.close();
    } else {
        lines.push(input);
    }
});

// When the input stream is closed
rl.on('close', () => {
    console.log('You entered:');
    console.log(lines.join('\n'));
});