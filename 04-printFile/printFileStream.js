var fs = require('fs');

var stream = fs.createReadStream('sample.txt', {encoding :'utf8'});

/*stream.on('open', function(){
	console.log('file opened for reading');
});
stream.on('data', function(chunk){
	console.log(chunk);
	//console.log('data event triggered');
});
stream.on('end', function(){
	console.log('end of stream reached');
});
stream.on('close', function(){
	console.log('file closed');
});

stream.on('error', function(err){
	console.log('something went wrong ', err);
});*/

stream.pipe(process.stdout);

stream.on('close', function(){
	console.log('file closed');
});