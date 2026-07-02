/*
1. for each of the shapes
   create a funciton<arrow, name>
   to calculate the area. ensure
   the function takes required parameters.
   test the function

2. we are create a super function called shape.
   its going to take the following params
   @param1=>function <correct shape> required
   @param2=>shape name<string>
   @param3=>s1 <required>
   @param4=>s2<optional>
   @param5=>s3<optional>

   1.inside your function shape.
   console each of the parameters and theier types.

   2.for each of your function ie for areaCircle,
   areRectangle, and areaTriangle
   call the shape function and pass the required params.
   example for areaCircle
   -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
   -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation

   3.inside your shape function.create a result variable
   equate it to the funciton call of @param1 and pass @param3,@param4,@param5
   example
   result=@param1(param3,param4,param5)

   4.Console.log the shop name and the result
   console.log(for shape ${@param2} area is ${result})
   for each shape call it like step 2 and see the result.
   -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
   -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation
*/
//Area of a circle
const area_circle = (r) => 3.14 * r ** 2;
console.log(area_circle(7));
//Area of rectangle
const area_rectangle = (l, w) => l * w;

console.log(area_rectangle(4, 5));
//Area of a triangle
const area_triangle = (b, h) => 0.5 * b * h;
console.log(area_triangle(3, 6));

const shape = (shapeFunction, shapeName, s1, s2, s3) => {
  console.log(`areaFun: ${areaFun}, type:${typeof areaFun}`);
  console.log(`shapeName: ${shapeName}, type:${typeof shapeName}`);
  console.log(`s1: ${s1}, type:${typeof s1}`);
  console.log(`s2: ${s2}, type:${typeof s2}`);
  console.log(`s3: ${s3}, type:${typeof s3}`);
};
shape(area_circle, "circle", 5);
shape(area_rectangle, "rectangle", 4, 6);
shape(area_triangle, "triangle", 3, 6);

/* for area circle*/

//make observations
