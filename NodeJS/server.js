//let http = require('http');
let fs = require('fs')
let url = require('url')

/*
let server = http.createServer();

server.on('request', (request,response) => {

    response.writeHead(200)
    console.log(url.parse(response.url))
    response.end('Bonjour')
    /*
    fs.readFile('index.html',(err,data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            }); // Tout c'est bien passé
            
            response.end(data)
        }
        
    })
    */
/*
});

server.listen(80);
*/

// Appli chat

