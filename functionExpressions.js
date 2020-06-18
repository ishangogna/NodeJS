//Normal function
function sayHi(){
	console.log('hi');
}

sayHi();


//function expression
var sayBye = function(){
	console.log('bye');
}

sayBye();

//can also pass function as argument of another function.
function callFunction(fun){
	fun();

}

callFunction(sayBye);

