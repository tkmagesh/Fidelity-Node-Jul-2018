var http = require('http'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

var server = http.createServer(function(req /* readableStream*/, res /* writableStream */){
	var urlObj = url.parse(req.url);
	if (urlObj.pathname === '/calculator'){
		var queryData = querystring.parse(urlObj.query);
		var op = queryData.op,
			n1 = parseInt(queryData.n1, 10),
			n2 = parseInt(queryData.n2, 10);

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	}	else {
		res.statusCode = 404;
		res.end();
	}	

});

server.listen(8080);