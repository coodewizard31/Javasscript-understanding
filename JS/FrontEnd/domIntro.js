//Targeting element using {getElementById}
const div1 = document.getElementById("div1");
console.log(div1);
//check check i was able to hover on the targeted element.
//getElementByClass{list-item}
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);
/* check on check it has brought all the listing which is in the form of an array & i can hover above them individually */
//target id using the queryselector{using prefix #->id}
const queryDiv1 = document.querySelector("#div1");
console.log(queryDiv1);
//i can hover above the individual element
//using the query selector to target class->{.}
const queryListItem = document.querySelector(".list-item");
console.log(queryListItem);
/* true to the promise the queryselector targets only one element in this case the first element */
const queryListAll = document.querySelectorAll(".list-item");
console.log(queryListAll);
/* queryselector all brings all listings */
//using the for loop
for (let k = 0; k < queryListAll.length; k++) {
  console.log(queryListAll[k]);
}
