// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = false;
  
  
  isInputAnArray=Array.isArray(input);

  //To chcck whether the given input is Array or not ,I used isArray method

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}
