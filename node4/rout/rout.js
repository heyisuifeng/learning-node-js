module.exports={
	login:function(request,response){
		response.write("welcome to login");
		console.log("welcome to login...");
	},
	register:function(request,response){
		response.write("you are registering");
		console.log("you are registering...");
	}
}