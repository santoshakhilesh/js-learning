/**
 * 
 */



var myObject = {};

console.log(myObject);

myObject = {
	"age":14,
	"name":"santosh",
	"address":{
		city:"mycity"
	}
};
console.log(myObject);
console.log(typeof(myObject["address"]["city"]));
myObject["address"]["city"]=10;
console.log(myObject);
console.log(typeof(myObject["address"]["city"]));
myObject["address"]["city"]={
		
		"pincode":560037
}

console.log(myObject);
console.log(typeof(myObject["address"]["city"]));
console.log(typeof(myObject["address"]["city"]["pincode"]));

