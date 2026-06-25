//put the user on a loop until theey feed the right thing
let grossMonthlySalary = null;
let paye = null;
while (true) {
  let gross = prompt("Enter your gross salary");
  if (!isNaN(gross)) {
    gross = Number(gross);
    if (gross > 0) {
      grossMonthlySalary = gross;
      break;
    }
  }
  alert(`invalid amount entered.
        Ensure your enter a number greater than 0`);
}
console.log(
  `Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary}`,
);
//calculate payee
if (grossMonthlySalary <= 24000) {
  paye = grossMonthlySalary * (10 / 100);
} else if (grossMonthlySalary <= 32333 && grossMonthlySalary > 24000) {
  paye = grossMonthlySalary * (25 / 100);
} else if (grossMonthlySalary <= 500000 && grossMonthlySalary > 32333) {
  paye = grossMonthlySalary * (30 / 100);
} else if (grossMonthlySalary <= 800000 && grossMonthlySalary > 500000) {
  paye = grossMonthlySalary * (32.5 / 100);
} else if (grossMonthlySalary > 80000) {
  paye = grossMonthlySalary * (35 / 100);
}
console.log(`Your paye = ${paye}`);
