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
let nssf = 0;
let employer = 0;
if (grossMonthlySalary > 0 && grossMonthlySalary < 9000) {
  console.log(`Sorry 900 is the minimum required`);
} else if (grossMonthlySalary === 9000) {
  // For salaries up to 9000, just calculate 6%
  nssf = grossMonthlySalary * 0.06;
  console.log(`Your Nssf=${nssf}`);
} else if (grossMonthlySalary > 9000) {
  //nssf calculation first
  nssf = 9000 * 0.06;

  // These calculation help us have nssf +rem
  let rem = (grossMonthlySalary - 9000) * 0.06;
  let employee = nssf + rem;
  let employer = employee;

  // Your calculation for when it is above 9000()
  let totalNssf = nssf + rem + employer;
  console.log(`Your nssf>9000  is ${employee} your total nssf${totalNssf}`);
}
