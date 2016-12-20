var http = require('http');
var Teacher = require("./class/TeacherClass")
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		teacher=new Teacher(1,"node",25);
		teacher.teach(response);
		teacher.play(response);
		response.end('');
	}
}).listen(8000);
console.log("Server running in port 8000");