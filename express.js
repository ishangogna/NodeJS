//express is a module that allows : 
//easy setup and routing
//higher performance
// makes life easier being a framework
// has get, post, put, delete http methods for handling requests.

var express = require('express')

//first thing to do is setup an express app. as requiring returns a function.
var app = express();

app.get('/',function(req,res){

    //no need to write the header, as express is smart enough to identify the kind of content.
    res.send('hello from express.');

});




//no need to give the IP. the app now listens @ 3000 port.
app.listen(3000);
console.log('now listening @ 3000.')






