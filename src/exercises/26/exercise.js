// Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?

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