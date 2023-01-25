// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
//yes,in the first line 
// - What is an IIFE? Have we used one here?//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
//yes we used increment,decrement,value
// - Discuss about "Revealing Module Pattern" and how we have used it.
//Revealing module pattern is a design pattern, which let you organise your javascript code in modules, and gives better code structure.
// - What are higher order functions?
//a function which takes another function as an argument or returns a function is known as a higher order function

const counter = (function () {
  //Your code goes here.
  let count1=0;
  return {
    increment(count){
      count1++;
      return count1;
    },
    decrement(count){
      count1--;
      return count1;
    },
    value(count){
      count1;
      return count1;
    },
     
  }
  
})();

//console.log(counter.decrement())