var http = require('http');
http.createServer(function (request,response){
	response.writeHead(200,{'Content-Type': 'text/html; charset=uft-8'});
	if(request.url!=="/favicon.ico"){
		console.log('I m coming');
		response.write('hello,world');
		response.end('');//��дû��httpЭ���β����д�ͻ���һֱ���ڵȴ�״̬
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');