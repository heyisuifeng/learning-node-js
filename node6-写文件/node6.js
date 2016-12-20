var http = require('http');
var optfile = require("./optfile/optfile.js");
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		function recall(data){
			response.write(data);
			console.log('I am waiting');
			response.end('');
		}
		optfile.writeFile("./views/writefile.txt","第六章文件的写入",recall);
	}
}).listen(8081);
console.log("Server running at 8081...");