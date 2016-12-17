var http = require('http');
var optfile = require('./optfile/optfile.js');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		//optfile.readfileSync('./views/login.html');
		//optfile.readfile('./views/login.html');//如果readfile方法传入了response，异步可能会报错
		//使用闭包解决
		function recall(data){
			response.write(data);
			console.log('I am waiting');
			response.end('ok');
		}
		optfile.readfile('./views/login.html',recall);
		console.log("主程序执行完毕");
	}
}).listen(8080);
console.log("Server running 8080..")