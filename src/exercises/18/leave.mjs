export class Leave {
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