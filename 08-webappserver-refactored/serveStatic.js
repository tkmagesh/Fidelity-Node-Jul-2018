var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css','.js', '.jpg', '.png', '.ico', '.xml','.json','.txt'];

function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	var resourceName = req.urlObj.pathname,
		resourceFullName = path.join(__dirname, resourceName);

	if (isStatic(resourceFullName) && fs.existsSync(resourceFullName)){
		var stream = fs.createReadStream(resourceFullName);
		stream.on('data', function(chunk){
			console.log('[@serveStatic] serving a chunk of file');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('[@serveStatic] completed serving the file');
			res.end();
		});
	} 
}