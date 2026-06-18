/* Template or string  interpolation its a way of combining string with data for output */
let firstName ="Samuel"
let secondNmame = "Jane"
let age =29
let address = "Juja County"
let userDetails =  firstName+""+secondNmame+"is"+age+"years old"+"he stays at"+address
console.log(userDetails)
console.log("User details is",typeof userDetails)


// best way to concentate or make a Template string
let userDetails2 = `${firstName} ${secondNmame}is ${age} years old and he stays at ${address}`;
console.log(userDetails2)