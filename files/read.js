const fs = require('fs');
const path = require('path')
// console.log(fs)
//it reads file synchronously
let fileText= fs.readFileSync('./example.txt','utf-8')
console.log(fileText)

fs.writeFileSync('./output.txt',)



