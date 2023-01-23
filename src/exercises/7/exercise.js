// Complete the below function.
// - Use Array methods

function commaSeparatedString(inputArray) {
  // Given an Array like ["firstName","lastName"]
  // Return a comma separated String like "firstName,lastName"
  let finalString=inputArray.join(',');
  console.log(finalString);
}
//used join method with a seperator of ,