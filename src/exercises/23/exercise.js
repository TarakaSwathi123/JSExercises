// What does a call to the noDelayPrint() do./
/*It printed You asked me to print the sheet 0
undefined
Printing sheet number undefined */
// Is 'this' inside print function referrring to an instance of Printer
/* No */

// Is the correct sheet printed? No
//  Comment your understanding
//  Provide a fix.

class Printer {
  constructor() {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the sheet ${this.index}`);
    setTimeout(() => {
      this.print();
    } ,0);// 0 milli-sec delay
    this.index++;
  }

  //noDelayPrint() {
    //console.log(`You asked me to print the sheet ${this.index}`);
   // setTimeout(this.print, 1000); //1 sec dely
    //this.index++;
  //}
}
var printer1= new Printer();
printer1.noDelayPrint();
