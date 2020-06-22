var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8')
var myWriteStream = fs.createWriteStream('pipeWrite.txt');

//Since passing info from readStream to writeStream is so common, Node actually gives us an 
//easy way of doing so without having to write the whole data event listener, by using Pipes.
//Pipes pass info from readStream to writeStream

myReadStream.pipe(myWriteStream);


