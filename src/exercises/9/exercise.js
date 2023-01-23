// Complete the below function.
// - Use Array methods.
// - Do not use loops
function Multiply(element){
  return element*2;
}

function multiplyArrayByTwo(inputArray) {
  inputArray=inputArray.map(Multiply)
  console.log(`Given input array is ${inputArray}`);
}



