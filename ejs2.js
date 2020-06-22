var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/profile/:name', function(req, res){
    data = {
        name : req.params.name,
        //This time passing a list so we can load it on ejs with JS loop.
        hobbies : ['eating','sleeping','coding']
    }
    res.render('ProfileWithHobbies', data);
});

app.listen(3000);
console.log('now listening @ 3000.');
