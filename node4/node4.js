var http = require('http');
var url = require('url');
var router = require('./rout/rout.js');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html,charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		var pathname=url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');//�滻��ǰ���/
		router[pathname](request,response);
		response.end('');
	}
}).listen(8000);
console.log("Server running in 8000");