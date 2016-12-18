var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		response.write("文件的写入");
		console.log("文件写入结束");
		response.end('');
	}
}).listen(8081);
console.log("Server running at 8081...");