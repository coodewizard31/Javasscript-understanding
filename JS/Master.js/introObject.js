/*
create an object. called car.
properties: name,model,top_speed
engine_information:<object>how many cylinder,number
manufacture:object<> name,aka, country
<number as property<key>>:any number
alert_info:function that when called prints information of the car as an alert
*/

const car={
    name:"Aston Martin",
    model:"DB12s",
    top_speed:"202",
    engine_info:{
        cylinder:"4.0-litre-twin-turbo v8",
        number:"Model m177",

    },
    manufacture:{
        country:"Unites Kingdom",
        aka:"Aston Martin"

    },
    4.0:"displacement in litres (twin turbo v8)",
    alert_info=function(){
        alert(`car:${car.name}
            model:${car.model}`)

    }
}