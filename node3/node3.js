var http = require('http');
var User = require("./class/UserClass");
var UserHaveConstructor = require("./class/UserHaveConstructor")
http.createServer(function(request,response){
	response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
	if(request.url!=="/favicon.ico"){
		user = new User();
		user.id=1;
		user.name="mode.js";
		user.play(response);
		userHaveConstructor = new UserHaveConstructor(2,"constructor");
		userHaveConstructor.play(response);
		response.end('');
	}
}).listen(8000);
console.log("Server running in port 8000");

