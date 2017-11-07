const name = "Snikers";
const age = 2;


//ES5
const sentence = "My dog, " + name + " is " + age * 7 + " years old";
console.log(sentence)

//ES6
const newWay = `My dog, ${name} is ${age * 7} years old!`;
console.log(newWay)