const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<center>GET method is served</center>');
        res.end();
    } 
    else if (req.method === 'POST') {
        let body = '';

        // Collect the data
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When the entire body is received, process the data
        req.on('end', () => {
            const formData = querystring.parse(body);

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<center>POST method is served</center>');
            res.write(`<p>Username: ${formData.username}</p>`);
            res.write(`<p>Email: ${formData.email}</p>`);
            res.write(`<p>Password: ${formData.password}</p>`);
            res.write(`<p>Confirm Password: ${formData.confirm_password}</p>`);
            res.end();
        });
    } 
    else {
        res.writeHead(405, {'Content-Type': 'text/html'});
        res.write('<center>Invalid method</center>');
        res.end();
    }
});

server.listen(9000, () => {
    console.log("Server is running @ http://localhost:9000");
});