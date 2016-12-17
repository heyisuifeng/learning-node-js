var http = require('http');
var url = require('url');
var rout = require('./rout/rout');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		var pathname=url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		console.log(pathname);
		rout[pathname](request,response);
	}
}).listen(8080);
console.log("Server running 8080");