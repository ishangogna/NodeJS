var fs = require('fs')


//we can create streams. The data now doesnt come all at once from readMe, but in chunks
// these chunks get stored in a temp buffer, which once full passses the info ahead.
var myReadStream = fs.createReadStream(__dirname+'/readMe.txt');
var myWriteStream = fs.createWriteStream('writeStream.txt');


//readstream has an event listener called data, which takes a callback function and calls the data "chunk"
//this chunk is the actual data that it read. Here, we are writing this chunk of data into writeStream.
myReadStream.on('data',function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
})

