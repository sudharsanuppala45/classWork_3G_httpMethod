const http = require('http')
const server = http.createserver((req, res)=>{
    if(req.method === 'GET'){
        res.writeHead(200, {'content-Type':'text/html'})
        res.write('<center>GET method is servered</center>')
        res.end()
    }
    else if(req.method === 'POST' ){
        res.writeHead(200, {'content-Type':'text/html'})
        res.write('<center>POST method is servered</center>')
        res.end()
    }
    else{
        res.writeHead(405, {'content-Type':'text/html'})
        res.write('<center>INVALID method is servered</center>')
        res.end()
    }
})