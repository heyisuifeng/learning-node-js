var fs = require('fs');//fs为node.js自带的操作文件的类
module.exports={
	readImg:function(path,response){
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