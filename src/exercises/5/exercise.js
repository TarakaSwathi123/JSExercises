// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue;
  decimalValue=parseInt(binaryString,2);
  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}
//Easiest way to convert binary to decimal is using "ParseInt Function" with base 2

