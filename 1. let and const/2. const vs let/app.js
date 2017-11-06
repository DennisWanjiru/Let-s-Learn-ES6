/*
    Const can't be redeclared or reassigned. Once decleared and Assigned it offers Read-Only Access.
    Let  can't be redeclared but it can be reassigned.
*/

//CONST
const PI = 3.142
// PI = 3.23

// console.log(PI) //Throws a TypeError: Assignment to constant variable.

const PI = 3.45;
console.log(PI) //Throws a SyntaxError: Identifier 'PI' has already been declared


//LET
let name = "Dennis";
console.log(name);

name = "Wanjiru"
console.log(name) //Runs perfectly with "Wanjiru" as the result.

let name = "Chris";
console.log(name) //Throws a SyntaxError: Identifier 'name' has already been declared

if (true) {
    let name = "Creez"
    console.log(name) //Runs perfectly with "Creez" as result coz it's scoped to the if statement block.
}