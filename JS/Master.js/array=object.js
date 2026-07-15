/*
 Look at the differences
 between an array and an object.
 ->in an array keys are sequential<numbers><>
*/
/*
create an object that behaves like an array.
1.create an array give it <any name>
 inside the array have two digits.
 0:<any digit>
 1:<any digit>
2.create an object. <any name>
 inside the object have keys.
 0:<any digit>
 1:<any digit>
 for the object create the length key.
 have it as size of the object<keys>
3.console.table both. you shoudl see there are 
the same.
*/

const ar = [20, 5];
const arObj = {
  0: 20,
  1: 5,
  push: function (newItem) {
    //this <Access object inside object>instead of using the object name
    const key = this.length; //current key
    this[key] = newItem; //element added to that key
    this.length = this.length + 1; //incriment the length
  },

  length: 2,
};
console.table(ar);
console.table(arObj);

const data = require("./data.json");
console.log(data);
for (i = 0; i < data.length; data++) {
  let title;
  if (people[i].gender === "male") {
    title = "Mr.";
  } else {
    title = "Ms.";
  }
  console.log(
    `Dear ${title} ${people[i].name},we are sadly to notify you abt the failed request to the work you applied for`,
  );
}