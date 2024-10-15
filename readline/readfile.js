const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('example.txt');

const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Recognize all instances of CR LF as a single line break
});

// Read each line
rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
});

// When the file is completely read
rl.on('close', () => {
    console.log('Finished reading the file.');
});