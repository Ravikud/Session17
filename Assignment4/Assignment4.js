
var http = require('http');
var fs = require('fs');
var file = "append.txt";

fs.writeFile(file,'Some text to write.',function(err){
  if(err)
    console.error(err);
  console.log('Written!');
});

fs.appendFile(file,'Some more text to append.',function(err){
  if(err)
    console.error(err);
  console.log('Appended!');
});