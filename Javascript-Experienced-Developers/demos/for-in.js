var seafood = {small: "shrimp", big: "shark"};

console.log("Is small in seafood" + "small" in seafood);

console.log("Has seafood the property toString? " + seafood.hasOwnProperty('toString'));
console.log("Has seafood the property big? " + seafood.hasOwnProperty('big'));


//For json returns the property names.
for(var element in seafood){
	console.log(element);
}


//For arrays returns just indices :(
var seaFoodArray = ['shrimp', 'shark'];

for(var element2 in seaFoodArray){
	console.log(element2);
}
