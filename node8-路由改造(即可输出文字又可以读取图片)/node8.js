var http = require('http');
var url = require('url');
var router = require('./rout/rout.js');

http.createServer(function(request,response){
	if(request.url!=="/favicon.ico"){
		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');//替换掉前面的/
		router[pathname](request,response);
	}
}).listen(8000);
console.log("Server running at 8000");