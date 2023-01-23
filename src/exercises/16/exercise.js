// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  //...
   
  constructor(employeeId,employeeName,noOfDays,salary,leavesCount){
    this.employeeId=employeeId;
    this.employeeName=employeeName;
    this.noOfDays=noOfDays;
    this.salary=salary;
    this.leavesCount=leavesCount;
  }
  finalPay(salary,days){
    return salary-(days*500);
  }
  remainingLeaves(leavesCount,noOfDays)
  {
    return leavesCount-noOfDays;
  }
}
//class variables:employeeId,employeeName,noOfDays,salary,leavesCount
//let leave1=new Leave('101','Swathi',4,50000,16);
//console.log(leave1.remainingLeaves(leave1.leavesCount,leave1.noOfDays));
