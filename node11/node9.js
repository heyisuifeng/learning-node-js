var http = require('http');
var url = require('url');
var router = require('./rout/rout.js');
var myException = require('./exception.js');
http.createServer(function(request,response){
	if(request.url!=="/favicon.ico"){
		try{
			var pathname = url.parse(request.url).pathname;
			pathname = pathname.replace(/\//,'');
			if(pathname=="login"){
				router[pathname](request,response);
			}else{
				myException.exceptionFun(0);
			}
		}catch(error){
			console.log("异常："+error);
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
			response.write(error.toString());
			response.end('');
		}
	}
}).listen(8000);
console.log("Server running at 8000...");