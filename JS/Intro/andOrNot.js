/* comparison operators
comparison operators evaluate to only true or false */
/* And -> &&
truth table -> all posible combinations
val and val2
combinations are
val1 && val2
val2 && value1
-> for all statements have to be true for it to be true */
let val1=true
let val2=false
let result1= val1&&val2
console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`)
let mercy_age=20
let mercy_balance=50000
//if mercy ageis greater than 18 and has more than 20k in her account
let verification =mercy_age>18&&mercy_balance>20000
console.log(`verification ${verification}`)
// My very own  made example
let queue1="boy"
let queue2="girl"
let allowed=Boolean(queue1)===true && Boolean(queue2)===true
console.log(`if not boy or girl gender not allowed!${allowed}`)
console.log(`mercy is age is greater than 18 or she has more than 20k in her account=${mercy_age>18||mercy_balance<20000}`)

/* Or atleast one statement has to be true for the whole statement to be true */
console.log(`This is not true = ${!true}`)
console.log(`This is not false =${!false}`)
/* Truthy of falsey
when you know something is not falsey then it is truthy
falsey
1.falsey
2/0
3.0
4.null
5.undefined
6.''->empty string
7 Nan -> not a number
Anything  that is not falsey is truthy
truthy||falsey ->truthy*/

let userName1="John Mwangi" //truthy
let userName2=0//falsey

let activateUserName=UserName2 ||userName1
//activateUserName->
console.log(activeUserName)
