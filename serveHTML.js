var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res){

    //here, we are readingSteram from index.html. so swap the content type to text/html
    // so that Node knows that the info we rendering is HTML.
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html');
    myReadStream.pipe(res);
})

server.listen(3000,'127.0.0.1');
console.log('now listening @ 3000')