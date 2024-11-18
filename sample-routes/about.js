const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile(path.join(__dirname, '../public/about.html'), 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
        } else {
            res.end(data);
        }
    })
}