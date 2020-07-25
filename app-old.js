const http = require('http');

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });

        let out = {
            name: 'Francisco',
            age: 33,
            url: request.url
        }

        response.write(JSON.stringify(out));
        // response.write('Hola mundo');
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');