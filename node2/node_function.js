var http = require('http');
var otherFunction1=require('./func/otherFunction1.js');
var otherFunction2=require('./func/otherFunction2.js');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=uft-8'});
	if(request.url!=="/favicon.ico"){
		//func1(response);//ͬһ���ļ������ڲ�����
		//otherFunction1(response);//���������ⲿ����
		//д��һ
		//otherFunction2.A(response);
		//otherFunction2.B(response);
		//д��������̬д�����Ƽ�
		otherFunction2['A'](response);
		otherFunction2["B"](response);
		response.end('');
	}
}).listen(8000);

function func1(response){
	response.write('hello,I am func1');
	console.log("I am func1");
}

