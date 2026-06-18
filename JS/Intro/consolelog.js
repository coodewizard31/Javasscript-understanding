/* Console.log acts like a window to output information on the screen that helps in debugging your code not a must but its important expecially fo beginners
console.log ensures that you write you code in a way that you will easily figure out an issue then you debugg */
/* Below is a caalculation for gross salary */
const salaryGross = 500000;
// console.log salaryGross
console.log("Gross salary is",salaryGross)
const payee = salaryGross*0.16;
// Tax calculation
console.log("For gross salary of",salaryGross,"payee is",payee)
const nhif = 2500
console.log("nhif deduction is",nhif)
const sha = 2500
console.log("sha is",sha)
const totalDeductions = payee+nhif+sha
console.log("Total deductions are",totalDeductions)
const netSalary =salaryGross-totalDeductions
console.log("Your net salary is",netSalary)