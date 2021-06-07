const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        return res.end('Welcome to Home Page')
    }
    if(req.url ==='/about'){
        return res.end('Welcome to our About page!')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Cant Find What U are Looking For</p>
    <a href="/">Back to Home!!!!!</a>
    `)
})

server.listen(5001)




/*
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
*/