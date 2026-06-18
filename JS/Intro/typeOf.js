let num1 = 749;
console.log("num1", num1, "Its type is", typeof num1);
let strNumb = "854";
console.log("srtNumb", strNumb, "Itrs type is", typeof strNumb);
let myName = "John";
console.log("My name is", myName, "Its typemis", typeof myName);
let isMarried = true;
console.log("isMarried", isMarried, "Its type is", typeof isMarried);
let nullVal = null;
console.log("nullVal", nullVal, "its type is", typeof nullVal);
let unValue;
console.log("unValue", unValue, "Its type is", typeof unValue);


const bonus=200
const salary = 50000
const salaryGross = bonus+salary;
// console.log salaryGross
console.log("Gross salary is", salaryGross);
const payee = salaryGross * 0.16;
// Tax calculation
console.log("For gross salary of", salaryGross, "payee is", payee);
const nhif = 2500;
console.log("nhif deduction is", nhif);
const sha = 2500;
console.log("sha is", sha);
const totalDeductions = payee + nhif + sha;
console.log("Total deductions are", totalDeductions);
const netSalary = salaryGross - totalDeductions;
console.log("Your net salary is", netSalary);