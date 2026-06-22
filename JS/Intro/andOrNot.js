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