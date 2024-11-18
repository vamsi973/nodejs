//node -2
const fs = require('fs');
const path = require('path');


const run = false;

//create file  with synchronous operation
run && fs.writeFileSync("./sample.txt", "Hi how are you");

//create file with asynchronous operation
run && fs.writeFile("./sampleAsync.txt", "Hello world- Async", (err) => {
    console.log(err)
});

// reading files
let resukt = run && fs.readFileSync('./sample.txt', "utf8");
console.log(resukt, 16)

//reading file with async operation
run && fs.readFile("./sampleAsync.txt", 'utf8', (err, result) => {
    console.log(result)
})

run && fs.appendFileSync('sample.txt', `\n Hello there appending - ${new Date()}`);

run && fs.appendFileSync("sampleAsync.txt", `\n Hello \appedning data ${new Date()}`)






run && fs.writeFileSync("./sample-1.txt", "Hi how are you");
run && fs.writeFile("./sampleAsync-1.txt", "Hello world- Async", (err) => {
    console.log(err)
});


run && setTimeout(() => {
    fs.unlinkSync('./sample-1.txt');
    fs.unlink('./sampleAsync-1.txt', (err) => console.log(err, 35));
}, 10_000)


run && fs.mkdir("./new_directory", err => console.log(err))
run && fs.mkdirSync("./new_directoryAsync")

run && fs.watch('sample.txt', (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} has been ${eventType}`);
    } else {
        console.log('File changed');
    }
});

fs.stat('sample.txt', (err, data) => console.log(data));


const filePath = path.join(__dirname, 'sample.txt');
console.log("directory name", __dirname)
console.log("file path", filePath)


// fs.copyFileSync("smaple.txt","vamsi.txt")