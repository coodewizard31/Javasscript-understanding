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
//Daniels solution
let taxableIncome =47000;
let currentTier=null;
let paye=null;

const bracket1=24000;
const bracket2=32333;
const bracket3=50000;
const bracket4=80000;

const band1=bracket1*0.1;
const band2=(brcket2-bracket1)*0.25
const band3=(bracket3-bracket2)*0.3
const band4=(bracket4-bracket3)*0.325
const personal_relief=2400;
if (taxableIncome <= 24000) {
  paye = taxableIncome * 0.1;
  paye_tier = "paye 0-24000 KES";
} else if (taxableIncome <= 32333) {
  let diff = taxableIncome - 24000;
  let tax = diff * 0.25;
  paye = tax + band1;
  paye_tier = "paya 24000-32333KES";
} else if (taxableIncome <= 50000) {
  let diff = taxableIncome - 32333;
  let tax = diff * 0.3;
  paye = tax + band1 + band2;
  paye_tier = "paye 32333-50000KES";
} else if (taxableIncome <= 80000) {
  let diff = taxableIncome - 50000;
  let tax = diff * 0.325;
  paye = tax + band1 + band2 + band3;
  paye_tier = "paye 50000-80000KES";
} else {
  let diff = taxableIncome - 80000;
  let tax = diff * 0.35;
  paye = tax + band1 + band2 + band3+band4;
  paye_tier = "80000KES to infinity KES";
}

const final_paye=Math.max(0,paye-personal_relief);

alert(`Taxable Income ${taxableIncome}
  paye ${paye} personal Relief ${personal_relief}
  Final payye${final_paye}
  Tier${paye_tier}`
);

