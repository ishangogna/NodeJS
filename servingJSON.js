var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'application/json'});
    
    //we create an object that we want to serve as JSON to the client.
    var myObj = {
        name : 'Ishan',
        purpose : 'Learning NodeJS!'
    }

    //res.end expects only string or buffer as argument, so saying
    // res.end(myObj) would not work.
    // so we use JSON.stringify to convert myObj to string.
    res.end(JSON.stringify(myObj));
})

server.listen(3000,'127.0.0.1');
console.log('now listening @ 3000');

