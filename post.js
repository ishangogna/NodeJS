var express = require('express')

//need to use body-parser node module for parsing incoming requests.
//It makes all the data passed w the request available as an object as 'req.body'
var bodyParser = require('body-parser')
var app = express();

//this is the function we want to invoke in our middleware to parse the post data.
//Make sure the extended is set to True. Otherwise the req.body wont work.
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.set('view engine', 'ejs');

app.get('/contact', function(req,res){
    
    res.render('contact');
})
app.post('/contact',urlencodedParser,function(req,res){
    
    //req.body = {who: '', department: ''}
    console.log(req.body);
    res.render('thanksForContact',{data:req.body});
})

app.listen(3000);
console.log('now listening @3000.')
