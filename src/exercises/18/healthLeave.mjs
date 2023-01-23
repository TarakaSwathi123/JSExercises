import { Leave } from "./leave.mjs";
class HealthLeave extends Leave{
    constructor(employeeId,employeeName,noOfDays,salary,leavesCount,medicineBill){
        super(employeeId,employeeName,noOfDays,salary,leavesCount,medicineBill);
        this.medicineBill=medicineBill;
}
extraPay(salary,medicineBill){
    return salary+medicineBill;

}
}
let healthLeave1=new HealthLeave(101,'swathi',3,50000,2,300);
console.log(healthLeave1.extraPay(healthLeave1.salary,healthLeave1.medicineBill));