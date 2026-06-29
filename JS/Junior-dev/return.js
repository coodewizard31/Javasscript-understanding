/* Remember any function without a return statement returns undefined */
function sayMyName() {
  let first_name = "Grand"; //statement 1
  console.log(`First Name ${first_name}`); //statement 2
  // the rest will not be executed because return statement exits the function
  let second_name = "Motela"; ///statement 3
  console.log(`Second Name ${second_name}`); //statement 4
  
  let full_name = `${first_name} ${second_name}`; //statement 5
  console.log(`Names are ${full_name}`); //statement 6
  return "Movie night";
}
let sayMyNameValue = sayMyName();
console.log(`Function returneed ${sayMyNameValue}`);

/* Scenario 1;
leave it as it is & look at the results.
=wht happens */
/* Scenario 2:
after the second statement inside the function put a return.
what should happen exactly (exits the function exactly where the return statement is) 
Scenario 3:
after the fourth statement inside the function put a return.
what happens(exits the function exactly where the return statement is)
Scenario 4:
put a return statement anywhere inside your function & return the string of your choice

Scenario 5:
Put a return statement anywhere inside your function & return a number of your choice

Scenario 6
Put a return statement anywhere inside your function & return a boolean of your choice*/
