//д�������й��캯��
function User(id,name){
	this.id=id;
	this.name=name;
	this.play=function(response){
		response.write("my name is "+this.name);
		console.log("my name is "+this.name);
	}
}

module.exports=User;