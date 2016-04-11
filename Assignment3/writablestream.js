
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var readableStream = fs.createReadStream('b.txt');
	//read the file
	var writablestream = fs.createWriteStream('writestream.txt');
	//write to another file
	readableStream.setEncoding("utf8");
	
	readableStream.on('data',function(chunk){
			console.log('chunk----',chunk);
			writablestream.write(chunk);
	});
});

server.listen(3030);
console.log("Server running on Port 3030");