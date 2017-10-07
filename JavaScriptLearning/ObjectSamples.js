function Name(first,last){
	//console.log(this);
	this.first = first,
	this.last=last
	//console.log(this);
}

var name =  Name("Santosh","Akhilesh");
console.log(this);
//console.log(name);
name = this;
console.log(name);