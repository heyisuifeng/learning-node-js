module.exports={
	A:function(response){
		console.log("I am class A");
		response.write('I am class A');
	},
	
	B:function(response){
		console.log('I am class B');
		response.write('I am class B');
	}
}