var fs = require('fs');//fs为node.js自带的操作文件的类
module.exports={
	//同步读取
	readfileSync:function(path){
		var data=fs.readFileSync(path,'utf-8');
		console.log(data);
		console.log("同步方法执行完毕");
	},
	//异步读取
	readfile:function(path,recall){
		fs.readFile(path,function(error,data){
			if(error){
				console.log(error);
			}else{
				console.log("文件读取成功");
				recall(data);
			}
		});
		console.log("异步方法执行完毕");
	}
}