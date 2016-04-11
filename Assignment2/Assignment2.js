var http = require('http');
var fs = require('fs');
var file = "writestream1.txt";

fs.writeFile(file,'Some text to write.',function(err){
  if(err)
    console.error(err);
  console.log('Written!');
});
