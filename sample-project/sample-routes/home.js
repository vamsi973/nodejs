const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({
    //     message: 'Welcome to the homepage!'
    // }))


    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end(`
    //     <html>
    //         <head>
    //             <title>Homepage</title>
    //         </head>
    //         <body>
    //             <h1>Welcome to the Homepage!</h1>
    //             <p>This is the home page of our Node.js server.</p>
    //         </body>
    //     </html>
    // `);


    res.writeHead(200, { "Content-type": 'text/html' });
    fs.readFile(path.join(__dirname, '../public/index.html'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        } else {
            res.end(data);  
        }
    });

}