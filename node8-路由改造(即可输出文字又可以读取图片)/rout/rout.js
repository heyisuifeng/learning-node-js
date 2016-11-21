var optfile = require('../optfile/optfile.js');//这里返回上级路径

module.exports = {
	login:function(request,response){
		response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		function recall(data){
			response.write(data);
			response.end('');
		}
		optfile.readfile("./views/html/login.html",recall);//上面已经返回这里不需要在返回
		//optfile.readfile("../views/html/login.html",recall);错误写法
	},
	showImage:function(request,response){
		response.writeHead(200,{'Content-Type':'image/jpeg'});
		optfile.showImages("./views/imgs/巴鲁姆克之剑.png",response);//上面已经返回这里不需要在返回
	}
}