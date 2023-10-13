const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers)
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Send a message</title></head>')
        res.write('<body><h1>Send Message!</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        const msg =[]
        req.on('data',(chunk)=>{
            msg.push(chunk)
            console.log('msg',msg)
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(msg).toString().substring(8);
            console.log('parsedBody',parsedBody)
            fs.writeFile('hello.txt',parsedBody)
        })
        res.statusCode = 302
        res.setHeader('Location','/')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello world !</h1></body>')
    res.write('</html>')
    res.end()
}); 

server.listen(3000)

