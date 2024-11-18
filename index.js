const http = require('http');

//sample routes 
const home = require('./sample-routes/home')
const about = require('./sample-routes/about')


// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on('request', (request, res) => {
    let url = request.url;
    let method = request.method;
    if (method === "GET") {
        if (url === '/') {
            home(request, res);
        } else if (url === '/about') {
            about(request, res);

            // res.writeHead(200, { 'Content-Type': 'application/json' });
            // res.end(JSON.stringify({
            //     message: 'This is the about page.'
            // }));
        } else {
            // Handle undefined routes (404)
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'Page not found'
            }));
        }
    } else if (method === "POST") {
        let body = '';
        console.log(`method ${method}`);
        request.on('data', chunk => {
            body += chunk;

        })
        request.on('end', () => {
            try {
                const parsedData = JSON.parse(body);
                console.log('Received POST data:', parsedData);
                res.writeHead(200);
                res.end(JSON.stringify({
                    message: 'Data received successfully',
                    data: parsedData
                }));
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({
                    error: 'Invalid JSON'
                }));
            }
        });
    }


});


server.listen(8000, () => {
    console.log(`8000 port started`);
});