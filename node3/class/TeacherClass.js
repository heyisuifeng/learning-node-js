var User = require("./UserHaveConstructor");
function Teacher(id,name,age){
	User.apply(this,[id,name]);
	this.age=age;
	this.teach=function(res){
		res.write(this.name+"½²¿Î");
	}
}

module.exports=Teacher;