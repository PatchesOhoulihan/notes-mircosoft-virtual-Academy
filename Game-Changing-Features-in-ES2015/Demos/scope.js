"use strict";

//Snippet 1

{ //Defining a new Block

}



//Snippet 2

{
  var t = 30;
  console.log('The value of t is (Inside of the Block): ' + t);
}

console.log('The value of t is (Outside of the Block): ' + t);
// Basically, they would say, hey, thet is declared inside of this block,
// so why can I outputit here on Line 17?
// The reason is is that JavaScript,using the var keyword ever since
// the creation of JavaScript, has usedsomething called function scope.
// Only functions create new scopes.
// Well, this double curly brace thinghere is not a function, therefore,
// the var t is actually defined withinthe context of the global scope.
// So, this out here is also the globalscope, as well as inside of
// the block, so we can referencethe variable t that's declared here.



//Snippet 2

{
  let r = 30;
    console.log('The value of r is (Inside of the Block): ' + r);
}
//ERROR: The Variable is not visible outside of the Block!
//console.log('The value of r is (Outside of the Block): ' + r);



//Snippet 3
//Same goes for const
{
  const s = 30;
    console.log('The value of s is (Inside of the Block): ' + s);
}

//ERROR: The Variable is not visible outside of the Block!
//console.log('The value of s is (Outside of the Block): ' + s);



//Snippet 4
function doit(){
  //Assignment before decaration
  init = 10;
  var init;
  console.log('The value of the function is: ' + init);
}

doit();
// This code worked because of something called hoisting.
// Basically, with the var keyword The declaration of variables
// as well as function declarations arehoisted to the top of their scope.
// So it literally happens before JavaScript actually even
// begins really executingthe code It actually hoists
// the variable declaration var t to the top
// and then,basically it's available for
// us within the context of the entire function scope.



//Snippet 5

// function doit(){
//   //Assignment before decaration
//   init = 10;
//   let init;
//   console.log('The value of the function is: ' + init);
// }
//
// doit();
//Hoisting don't work with let and it drops an Error;
