var http = require('http'),
	fs = require('fs'),
	path = require('path');

var server = http.createServer(function(req /* readableStream*/, res /* writableStream */){
	var resourceName = req.url,
		resourceFullName = path.join(__dirname, resourceName);

	if (!fs.existsSync(resourceFullName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resourceFullName);
	stream.pipe(res);
});

server.listen(8080);