/* 1.Name function
2. Anonymous Function:
a function can be assigned to be a variable
a variable can reference a function*/
function areaCircle(r) {
  return 3.142 * r * r; // area of a function
} //named function
let age = 23;
let samsAge = age; //age=23
let ac = areaCircle;
/* what is the value of ac and what is it
->hint <use typeof>*/
console.log(ac);
/* if you want to create an anonymoous function
1. create a function of your choice by using a named variable
2.Assign that function a variable.
3.Directly equate your variable to the function defination
4.remove the original function {still works by calling the variable but calling the function fails}
5.try calling the variable & the original function
6.Remove the name of a function,since its now rendered useless
7.you remain with the called anonymous function*/
//Function for the area of a rectangle
function rectangleArea(l, w) {
  return l * w;
}
let rA = function rectangleArea(l, w) {
  return l * w;
};

function belief() {
  console.log(`Father+Son+HolySpirit`);
}
let BV = function belief() {
  console.log(`Father+Son+HolySpirit`);
};
//Arrow function
//Creating an Arrow function
/* 1.Create an anonymous function 
    2. Remove the function keyword
    3.between () <->{} put an arrow.
    4.good practice ti have a variable as a const*/

//Call back function
function curentTime() {
  const currentTimestamp = new Date().toLocaleDateString();
  //alert
  alert(`Current Time ${currentTimestamp}`);
  console.log(`Current Timestamp:${currentTimestamp} `);
}
//Now calling back time in the frame of time you want
setInterval(curentTime,1000)
//call backs is not about function