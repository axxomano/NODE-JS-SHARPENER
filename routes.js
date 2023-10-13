const fs = require('fs')
const  requestHandler = (req,res) =>{
    const url = req.url
    const method = req.method
    if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('hello.txt', { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end('Internal Server Error');
        } else {
            res.write('<html>');
            res.write('<head><title>Send a message</title></head>');
            res.write(`<body><h1>Send Message!</h1><p id="fileData">${data}</p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            res.end();
        }
    });
} else if (url === '/message' && method === 'POST') {
    const msg = [];
    req.on('data', (chunk) => {
        msg.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(msg).toString().substring(8);
        fs.writeFile('hello.txt', parsedBody, (err) => {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            }
        });
    });
}
}

module.exports = {
    handler : requestHandler,
    someText : 'This is some text'
}