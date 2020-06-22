var express = require('express')

var app = express();

// set up express app to use ejs as view engine
app.set('view engine', 'ejs');

//this endpoint sends a response which takes the id
app.get('/profileById/:id',function(req,res){
    res.send('You are viewing profile of ' + req.params.id);
});


//this endpoint renders a dynamic ejs (HTML) page passing the name(from the url), and purpose
// as data object to the ejs file.
// NOTE : Node looks for the ejs files in "views" directory by default. so no need of giving
//        full path.
app.get('/profileByName/:name', function(req,res){
    data = {
        name: req.params.name,
        purpose : 'Learning ejs!'
    };
    res.render('Profile', data);
});

app.listen(3000);
console.log('now listening @ 3000.')