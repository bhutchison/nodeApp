/**
 * Created by Barry on 26-Nov-15.
 */

var http = require('http');
var port = process.env.port || 1337;

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(port);