//???
function User(){
	this.id;
	this.name;
	this.play=function(response){
		response.write("my name is "+this.name);
		console.log("my name is "+this.name);
	}
}

module.exports=User;