//core module required to create a server
var http = require('http');

//create a server. It takes a callback function which takes request and response
// arguments. You need to write a header (additional info about response), which includes status code
// and the content type so that the browser knows what to do with it.
//writeHead is a method to make a header
//once request is ended, server is sending 'hello server' which is a plain text as specified in the
//header
var server = http.createServer(function(req,res){
    console.log('request was made from : ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from server');

});


//now to assign a port number that node will listen to.
server.listen(3000,'127.0.0.1');
console.log('listening to port 3000.')