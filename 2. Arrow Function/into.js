/*
    The arrow function are succinct andeasy to write.
    They have this binding.
*/
// let x = "Annonymous";

// //Annonymous Normal Function
// setInterval(function() {
//     console.log(x)
// }, 1000);

// //Annonymous Arrow Function
// setInterval(() => {
//     console.log(x)
// }, 1000);

// //Named Normal function
// function sayName(name) {
//     console.log(`Hello ${name}`);
// }

// sayName("Dennis");

// //Named Arrow Function
// let sayHello = (name) => {
//     console.log(`Hello ${name}`);
// }

// sayHello("Creez");

// //Arrow function that return a value
// let add = (a, b) => a + b;
// console.log(add(2, 4));

// const radii = [7, 10, 4];

// let areas = radii.map(radius => {
//     ~ area = Math.PI * (radius * radius)
//     return area.toFixed(0);
// })

// console.log(areas);

let fam = ["Jane", "Dennis", "Ian"];
let name = "Wanjiru"
let members = fam.map(member => `${member} ${name}`);
console.log(members)












