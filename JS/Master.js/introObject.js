/*
create an object. called car.
properties: name,model,top_speed
engine_information:<object>how many cylinder,number
manufacture:object<> name,aka, country
<number as property<key>>:any number
alert_info:function that when called prints information of the car as an alert
*/

const car = {
  name: "Aston Martin",
  model: "DB12s",
  top_speed: "202",
  engine_info: {
    cylinder: "4.0-litre-twin-turbo v8",
    number: "Model m177",
  },
  manufacture: {
    country: "Unites Kingdom",
    aka: "Aston Martin",
  },
  4.0: "displacement in litres (twin turbo v8)",
  alert_info: function () {
    alert(`car:${car.name}
            model:${car.model}`);
  },
};
console.log(`car  datatype ${typeof car}`);
console.log(car);
console.log("--using console.log (table)--");
console.table(car);
//first method to acess object properties using the dot notation the second one is using brackets

console.log(`The name is ${car.name} and the typeof is:${typeof car.name}`);
console.log(
  `The name is ${car["name"]} and the typeof is:${typeof car["name"]}`,
);
// model
console.log(`The model is: ${car.model} and the typeof is:${typeof car.model}`);
console.log(
  `The model is: ${car["model"]} and the typeof is:${typeof car["model"]}`,
);
//top speed
console.log(
  `The top_speed is: ${car.top_speed} and the typeof is:${typeof car.top_speed}`,
);
console.log(
  `The top_speed is: ${car["top_speed"]} and the typeof is:${typeof car["top_speed"]}`,
);
//cylinder & number
console.log(
  `The engine_info is: ${car.engine_info} and the typeof is:${typeof car.engine_info}`,
);
console.log(
  `The engine_info is: ${car["engine_info"]} and the typeof is:${typeof car["engine_info"]}`,
);

console.log(
  `The engine_info cylinder is: ${car.engine_info.cylinder} and the typeof is:${typeof car.engine_info.cylinder}`,
);
console.log(
  `The engine_info is: ${car.engine_info["cylinder"]} and the typeof is:${typeof car.engine_info["cylinder"]}`,
);
console.log(
  `The engine_info number is: ${car.engine_info.number} and the typeof is:${typeof car.engine_info.number}`,
);
console.log(
  `The engine_info numberis: ${car.engine_info["number"]} and the typeof is:${typeof car.engine_info["number"]}`,
);

//manufacture
console.log(
  `The engine_info is: ${car["manufacture"]} and the typeof is:${typeof car["manufacture"]}`,
);

console.log(
  `The engine_info cylinder is: ${car.manufacture.country} and the typeof is:${typeof car.manufacture.country}`,
);
console.log(
  `The engine_info is: ${car.manufacture["country"]} and the typeof is:${typeof car.manufacture["country"]}`,
);
console.log(
  `The engine_info number is: ${car.manufacture.aka} and the typeof is:${typeof car.manufacture.aka}`,
);
console.log(
  `The engine_info numberis: ${car.manufacture["aka"]} and the typeof is:${typeof car.manufacture["aka"]}`,
);



car
