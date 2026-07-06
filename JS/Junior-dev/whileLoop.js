let n = 0;
let condition = true;
//condition=> falsey: we automatically exit the loop
while (condition) {
  console.log("n is", n); //statement 1
  n = n + 1; //statement 1
  if (n > 100) {
    //statement 1
    condition = false; //statement 1
  } //statement 1
}
//the condition remains true unless a false condition is meet & it breaks out of the code