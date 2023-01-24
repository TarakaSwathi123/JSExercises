// What is a callback?

//A callback is a function passed as an argument to another function.
//This technique allows a function to call another function
//A callback function can run after another function has finished

setTimeout(() => {welcome("Swathi",success)});
function welcome(name,callback) {
  
    console.log(`Welcome ${name}`);
  
  callback();
}

function success() {
  console.log("Greetings successful!!");
}



// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.
