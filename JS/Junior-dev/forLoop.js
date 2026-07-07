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