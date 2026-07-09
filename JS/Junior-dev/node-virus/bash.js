/*
for loops, while loops

->we are going to create an application


->function <give it any name>
void funciton-> function that does not take any parameters
-> create a file -> name of file is currentdate.txt
and 10k lines of code.
<go you 1>
<got you 2 >
<got 3>
-> use a for loop|
file system api-> nodejs

*/
const fs = require(`fs`); // node.js file system
function face_cards() {
  //importing a file system api
  const file_data=""
  const file_name=`${Date.now()}.txt`

  const reach=(error)=>{}
  for(let i=0;i<10000; i++){
    file_data=file_data+`\nyou have${i}\n`
  }
}
