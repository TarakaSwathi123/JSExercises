// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  let result;
  if (number != 0) {
    
    result = 10 / number;
  } else {
    result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}

//reason for failure: result is defined inside if.To resolve it,result needs to be declared  outside if
