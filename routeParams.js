var express = require('express')

var app = express()

app.set('view engine', 'ejs');

app.get('/profile/:id',function(req,res){
    res.send('You are viewing the profile of ' + req.params.id);
})

app.listen(3000);