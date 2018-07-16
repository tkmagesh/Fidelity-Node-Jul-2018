var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.css','.js', '.jpg', '.png', '.ico', '.xml','.json','.txt'];

function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req /* readableStream*/, res /* writableStream */){
	var urlObj = url.parse(req.url),
		resourceName = urlObj.pathname,
		resourceFullName = path.join(__dirname, resourceName);

	if (isStatic(resourceFullName) && fs.existsSync(resourceFullName)){
		var stream = fs.createReadStream(resourceFullName);
		stream.pipe(res);
		return;
	} else if (resourceName === '/calculator' && req.method === 'GET'){
		var reqData = querystring.parse(urlObj.query);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (resourceName === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var reqData = querystring.parse(rawData);
			var op = reqData.op,
				n1 = parseInt(reqData.n1, 10),
				n2 = parseInt(reqData.n2, 10);

			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		})
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8080);