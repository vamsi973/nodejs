const fs = require('fs');
let content = "sample content is appended"
// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');
// let rl = readline.createInterface(input, output);
// let ans = '';
// rl.question("what do you want to write in the file", (answer) => {
//     ans = answer;
//     rl.close()
// })
fs.writeFileSync('output.txt', `${content} \n on date ${new Date} \nalso append cli too data ${ans}`)