var fs = require('fs');

module.exports={
	readfile:function(path,recall){
		fs.readFile(path,function(error,data){
			if(error){
				throw error;
			}
			recall(data);
		});
	},
	
	showImages:function(path,response){
		fs.readFile(path,'binary',function(error,filedata){
			if(error){
				console.log(error);
				return;
			}else{
				response.write(filedata,'binary');
				response.end();
			}
		});
	}
}