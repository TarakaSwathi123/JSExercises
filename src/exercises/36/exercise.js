// Null coalescing
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return null;
}
function D() {
  console.log("D was called");
  return "foo";
}
console.log(A() ?? C() ?? D());
console.log(B() ?? D());

//Comment the outputs below and reason

// first A was called is printed because its console.log statement ,then undefined is returned 
//so right side part of Null coalescing operator is called
//then print statement: c was called is printed then it returned null so again right side part of operator is called
//it prints d was called and foo

//when B was called as it doesn't return undefined or null, left side part i.e B is called and printed B was called and false