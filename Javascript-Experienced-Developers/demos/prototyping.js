//Testing Prototype behavior

function fruit(name, color){

	this.name = name;
	this.color = color;

	this.saySomething = function(){
		console.log('Say hi')
	}

}

var apple = new fruit('apple','red');
var orange = new fruit('orange', 'orange');

//Adds the Methode healthy to all Object of type Fruit
fruit.prototype.healthy = function(){
	console.log('The Fruit ' + this.name + ' is good for you.');
}

apple.healthy();
orange.healthy();

//Adds the Methode healthy2 just to the instance of the name Apple
apple.healthy2 = function(){
	console.log("I am availiable just for this Object");
};

apple.healthy2();
//sorange.healthy2();







