var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});

    //we make a readStream to get data in stream from readMe.txt
    //we then pipe this data to response of the server instead of manually writing
    //res.end('hello from server');
    var myReadStream = fs.createReadStream(__dirname+'/readMe.txt');
    myReadStream.pipe(res);
})

server.listen(3000,'127.0.0.1');
console.log('now listening @ 3000.')
