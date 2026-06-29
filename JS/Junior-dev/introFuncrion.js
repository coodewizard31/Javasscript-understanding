/* Function allow you to write reusable bit of code.
to use Dry(Do not repeat your self) by using a code block*/

/* A function only works when you call it */
/* Create a simple function when you call it  it alerts you on current time */

// function timeAlert() {
//     const date=new Date()
//     alert(`time stamp:${date.tolocaleString("en-KE",{
//         timeZone:Africa/Nairobi,
//     })}`);
//}
/* To call a function name is by way of using it followed by the brackets */
//timeAlert();

/* How to calculate area of a triangle =l*w*h */
function areaOfTriangle(base,height){
    console.log(`length is${base} its type ${typeof base}`);
    /* simply a box throwing in imputs then its processed to give an output */
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 *base*height;
    console.log(`for triangle with base${base}and height${height}area is ${area}`)
   
}
/* Scenario 1:
call the area of atriangle function don't pass any argument
Scenario2:
call the function pass base of 20 and no width
areaofTriangle(20)// output
Scenario 3:
call the function pass base of 20 and height of 30
area of triangle(20,30)
Scenario 4:
create a variable base1=50 and variable height=60
areaofTriangle(base1,height1) */

areaOfTriangle(20);
// Area output sould be 0
areaOfTriangle(20,30);
//Output:base:20,height:30 =>300
let base1=50;
let height1=60;
areaOfTriangle(base1,height1);