var http = require('http');
var otherFunction1=require('./func/otherFunction1.js');
var otherFunction2=require('./func/otherFunction2.js');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=uft-8'});
	if(request.url!=="/favicon.ico"){
		//func1(response);//同一个文件调用内部函数
		//otherFunction1(response);//单个调用外部函数
		//写法一
		//otherFunction2.A(response);
		//otherFunction2.B(response);
		//写法二：动态写法，推荐
		otherFunction2['A'](response);
		otherFunction2["B"](response);
		response.end('');
	}
}).listen(8000);

function func1(response){
	response.write('hello,I am func1');
	console.log("I am func1");
}

