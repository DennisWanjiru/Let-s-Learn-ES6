/*
Var keyword comes with only the function scoping but not block scoping.
Let keyword on the other hand, enables block-scoping
*/

function sayHello() {
    var name = "Dennis";
    console.log(`Hello ${name}`);
}

sayHello();

//console.log(name); //Will throw a ReferenceError: name not defined

//Block-Scope
if(true) {
    var pet = "Shimah";
    console.log(`My pet ${pet}`);
}

console.log(pet); //Will execute pet which is out of if statement block-scope


//LET KEYWORD IN ES6
function sayHello() {
    let name = "Dennis";
    console.log(`Hello ${name}`);
}

sayHello();

//console.log(name); //Will throw a ReferenceError: name not defined

//Block-Scope
if(true) {
    let pet = "Shimah";
    console.log(`My pet ${pet}`);
}

//console.log(pet); //Will throw a ReferenceError: name not defined because it is out of if statement block-scope

//COST KEYWORD
const PI = 3.145 //Once declared cannot be reassigned "Offers a Read-Only Access"
let radius = 7;

let area = PI * radius * radius;
console.log(area)

let PI = 4;
console.log(PI) //Throws a SyntaxError: PI has already been declared
