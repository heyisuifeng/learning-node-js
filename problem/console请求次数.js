var http=require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
	if(request.url!=="/favcon.ico"){
		console.log(request.url);
		response.end('');
	}
}).listen(8000);

