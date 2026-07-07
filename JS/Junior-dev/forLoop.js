/* for loop is meant for numbers
fo loop combines it with 1 statement */
/*
---> for loop-> mostly ment for numbers
-- combination of using while for number
loops: 1:start point, 2:condition , 3:after each itteration
combines it into one stament
for(startpoint;condition;each-itteration){

}

*/

//use this while loop to make a for loop

let k = 0; //starting point

//condition:k<20
while (k < 20) {
  console.log("k", k);
  k = k + 1; //after each itteration
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k", k);
}



function promptStudent() {
  let num1 = null;
  let num2 = null;
  
  while (true) {
    num1 = prompt("Enter the first number");
    if (isNaN(num1)) continue; 

    num2 = prompt("Enter the second number");
    if (isNaN(num2)) continue; 

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if (num1 <= 0 || num2 <= 0) continue; 
    
    break;
  }
  
  console.log("Got valid numbers", num1, num2);
  mathTable(num1, num2);
}

function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 or number2 are numbers greater than 0");
    return;
  }

  // REFACTOR: Replaced while loop with a decreasing for loop
  for (let outerLoop = num1; outerLoop > 0; outerLoop--) {
    doInnerLoop(outerLoop, num2); 
  }
}

// individual // test separate
function doInnerLoop(outerLoop, num2) {
  // REFACTOR: Replaced while loop with a decreasing for loop
  for (let innerLoop = num2; innerLoop > 0; innerLoop--) {
    console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
    console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
  }
}
mathTable(7,8)