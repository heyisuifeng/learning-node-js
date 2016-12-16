var http = require('http');
var Teacher = require("./class/TeacherClass")
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		teacher=new Teacher(1,"node",25);
		teacher.teach(response);
		teacher.play(response);
		console.log("teacher id is "+teacher.id);
		console.log("teacher name is "+teacher.name);
		console.log("teacher age is "+teacher.age);
		console.log("teacher class have a function: "+teacher.teach);
		response.end('');
	}
}).listen(8000);
console.log("Server running in port 8000");