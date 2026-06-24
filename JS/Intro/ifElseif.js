/* if and else if
(you are creating a chain) 
we exit the if and else if on the first truth  
it scans the first truth then executes & exits
so else if cannot exist without starting with an if because it is chained to it*/


let age= prompt("Enter your age:");
console.log(`age is ${age} typeof ${typeof age}`);
alert(`you entered ${age}`);
if (age <10){
    alert("You are a a baby.");

} else if (age<13){
    alert("You are a teen");
}else if(age >18){
    alert("You can legally drink and smoke");
}else if(age >27){
    alert("Best age for marriage");
}else if(age>45){
    alert("Best age for retirement");
}else if (age>50){
    alert("You are an ansestor");
}