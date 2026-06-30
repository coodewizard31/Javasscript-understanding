/*Procedure.
1. declare variable name in the gobal scope.
2.create function call sayMyName
console.log("the name an linw number")
-remeber to call the function
3.declare variable name inside the function at the start
assign it a different name.print the name &line number
4.create an if statement:inside the ffunction pass a truthy condition of your choice.
inside the block console.log name and its line number
5.Inside the first if statement at the start declare variable name give it a new name
console.log name & line number.
6.Inside the function after the if block 
console.log name and line number.
7.Try declaring the same variable name
in the same scope
} */

//PROCEDURE BELOW to play with scopes
let player9 = "Endrick";
function sayMyName() {
    console.log(`name ${player9} line ${21}`);
    let player10= "Bruno";
  console.log(`name ${player10} line ${23}`);
  if(true){
    let player7="Vinicious Jr"
    console.log(`name ${player7} line ${26}`)
  }
 // not declared inside the function
  console.log(`name ${player10}  line ${28}`)
}
sayMyName()