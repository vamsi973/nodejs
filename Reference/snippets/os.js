const os = require('os');

console.log("toatl memory", os.totalmem(), "bytes");  // Returns the total system memory in bytes
console.log("free memory", os.freemem(), "bytes");   // Returns the free system memory in bytes
console.log('CPU Info:', os.cpus());  // Returns an array of objects with CPU details
console.log("The number of CPU cores", os.cpus().length); // Returns the number of CPU cores
console.log("network interfaces", os.networkInterfaces()); // Returns an object containing network interfaces
console.log("tmpdir", os.tmpdir()); // Returns the path of the temporary directory
console.log(os.EOL); // Returns the end-of-line marker for the OS



console.log("hostname", os.hostname()); // Returns the hostname of the OS
console.log("platform", os.platform());  // Returns the platform (e.g., 'darwin', 'win32')
console.log("release", os.release());   // Returns the OS version
console.log("arch", os.arch());      // Returns the CPU architecture (e.g., 'x64')