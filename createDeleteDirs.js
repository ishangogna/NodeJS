var fs = require('fs')

// Synchronous : 

// to delete a file
fs.unlinkSync('writeMe.txt');


// make a directory
fs.mkdirSync('stuff');


// remove a directory
fs.rmdirSync('stuff');


// Asynchronous
fs.mkdir('stuff',function(){
    fs.readFile('readMe.txt','utf8',function(err,data){
        fs.writeFileSync('./stuff/writeMe.txt',data);
    })
})

//remove file in folder first, then the folder.
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdirSync('stuff');
})

