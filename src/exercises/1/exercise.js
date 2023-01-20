// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function printOneToTen() {
  for (var number = 1; number <= 10; number++) {
    console.log(`\n${number}`);
  }
}
//reason for failure is: assignment to constant variable 
//It's fixed by changing const to var