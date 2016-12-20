var http = require('http');
var optImage = require('./optImage/optImage');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'image/jpeg'});
	if(request.url!=="/favicon.ico"){
		optImage.readImg('./imgs/巴鲁姆克之剑.png',response);
	}
}).listen(8000);
console.log('Server running at 8000');
