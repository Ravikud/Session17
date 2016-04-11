
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var readableStream = fs.createReadStream('b.txt');
	console.log('Reading sample text');
	var data='';
	
	readableStream.on('data',function(chunk){
			console.log('chunk----',chunk);
			data=data+chunk;
	});
	readableStream.on('end',function(){
			console.log('end----',data);
	});
});

server.listen(3030);
console.log("Server running on Port 3030");