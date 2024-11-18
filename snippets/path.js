//node -1
const path = require('path');


//Concatenating folder and file names into a complete path.
const fullPath = path.join("folder", "subfolder", 'file.txt');
console.log('fullpath', fullPath)

const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log('absolutepath', absolutePath);

const normalizedPath = path.normalize('/folder/subfolder/../file.txt');
console.log("normalizedPath", normalizedPath);

console.log(path.isAbsolute('/folder/file.txt'));  // true (Unix-style absolute path)
console.log(path.isAbsolute('folder/file.txt'));  // false (relative path)

console.log(path.basename('/folder/subfolder/file.txt')); // 'file.txt'
console.log(path.basename('/folder/subfolder/file.txt', '.txt')); // 'file'

console.log(path.dirname('/folder/subfolder/file.txt'));  // '/folder/subfolder'


console.log(path.extname('/folder/subfolder/file.txt'));  // '.txt'
console.log(path.extname('/folder/subfolder/file'));      // ''

const parsed = path.parse('/folder/subfolder/file.txt');
console.log(parsed);

const pathObject = {
    dir: '/folder/subfolder',
    base: 'file.txt'
};
const formattedPath = path.format(pathObject);
console.log("formattedPath", formattedPath)

console.log(path.relative('/folder/subfolder', '/folder/otherfolder/file.txt'));  // '../../otherfolder/file.txt'