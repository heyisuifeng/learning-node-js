var optfile = require('../optfile/optfile.js');
module.exports={
	login:function(request,response){
		function recall(data){
			response.write(data);
			response.end('');
		}
		optfile.readfile('./views/login.html',recall);
	},
	
	register:function(request,response){
		function recall(data){
			response.write(data);
			response.end('');
		}
		optfile.readfile('./views/register.html',recall);
	}
}