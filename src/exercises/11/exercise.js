// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function finalSum(total,ele){
    return total+ele;
}
function sumOfArray(inputArray) {
    let totalSum = inputArray.reduce(finalSum);
    console.log(totalSum);
}


