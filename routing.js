var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    
    //if url of request is /home or /, render index.html
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    
    //else if url of request is /contact, render contact.html
    else if(req.url ==='/contact'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);

    }

    //serve JSON on /user endpoint
    else if(req.url == '/user'){
        var myObj = {
            name: 'Ishan',
            purpose: 'Learning NodeJS!'
        }
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(myObj));
    }

    //on any other url, render a 404 page.
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
        
    }
})

server.listen(3000,'127.0.0.1');
console.log('now listening @ 3000.')
