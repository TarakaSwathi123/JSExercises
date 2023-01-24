// - Explain currying.
//It is a technique in functional programming, transformation of the function of multiple arguments 
//into several functions of a single argument in sequence. 

// - Convert the below function to curry function

//function calculateVolume(length, breadth, height) {
  //return length * breadth * height;
//}
function calculateVolume(length) {
  return function (breadth) {
      return function (height) {
          return length * breadth * height;
      }
  }
}

