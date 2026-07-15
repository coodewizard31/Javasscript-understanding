/*
 DOM Access using
 1.querySelector
 2.documentGet<...>

 1.getElementById:
   -create a variable assign to the dom element with id<div1>
   -console.log this element :view in your browser
   -in browser console you should be able hover over the element

 2.getElementByClass
   -create a variable assign to the dom element with with class<list-item
   -console.log this element :view in your browser
   -in browser console you should be able hover over the element>

 3.querySelector:
   1.for the id: hint use # for id
     -create a variable assign to the dom element with id<div1>
     -console.log this element :view in your browser
     -in browser console you should be able hover over the element
   2.<use querySelector>for the class: hint use <.>
     -create a variable assign to the dom element with class<list-item>
     -console.log this element :view in your browser
     -in browser console you should be able hover over the element
     -Note you only get the first list item.
   2.<use querySelectorAll>for the class: hint use <.>
     -create a variable assign to the dom element with class<list-item>
     -console.log this element :view in your browser
     -in browser console you should be able hover over the element
     -Note you get the array.
     -use a for loop or while to go through the array elements
      and print each element.

 */

const getDiv = document.getElementById("div1");
console.log(`view in the browser:${getDiv}`);
//getting element by class
const listItems = document.getElementsByClassName("fruits");
const firstListedItem = listItems[0];
console.log(`first element:${firstListedItem}`);
//function

/*
Update dom elements.
-innerHTML<replaces the html>
-innerText<replaces the innerText>
1.buttons.
  1.original Content
  2.updating Content
  3.update the innerText
*/
/* below function tells me that the buttom is clicked its like a sensor*/
const otherFruits = ["Mango", "Pinapple", "Passion"];
const originalDiv = document.getElementById("div1").innerHTML;
console.log(originalDiv);
function original() {
  console.log("Original clicked");
  //resets the div to its original value
  document.getElementById("div1").innerHTML = originalDiv;
}
function replace() {
  console.log("replace clicked");
  const newHtml = `<h3>fights</h3>
        <ul>
            <li class="list-item">Tekwondo</li>
            <li class="list-item">Kaboera</li>
            <li class="list-item">Boxing</li>
        </ul>`;
  //some html
  document.querySelector("#div1").innerHTML = newHtml;
}
function updateFruits() {
  console.log("update fruits clicked");
  const fruitElements = document
    .querySelector("#div1")
    .querySelectorAll(".list-item");
  for (let f = 0; f > fruitElements.length; f++) {
    const singleFruitElement = fruitElements[f];
    singleFruitElement.innerText = otherFruits[f];
  }
}
//inner texts & loops {fruits}
