var fs = require('fs')

//explicitly specifying that its a synchronous function
//read a file
var readMe = fs.readFileSync('readMe.txt','utf8');

console.log(readMe);

//writes content of readMe.txt into writeMe.txt
fs.writeFileSync('writeMe.txt',readMe);


//asyncrhonous : fires function once it has read the function and returns data, takes that data and logs.
fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
})
