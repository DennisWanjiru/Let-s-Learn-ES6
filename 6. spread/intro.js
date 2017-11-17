const sweet = ["smoothing meaty", "papperoni", "chicken sweet n sour"];
const special = ["metzz", "veg", "hawaiian"];

//concating arrays
const pizza = [...sweet, "kennan", ...special]
console.log(pizza)

//pushing items into an arraynusing spread
const arr = ["hello", "there"]
console.log(arr)
const newArr = ["my greetings", "from msa, ke"]
arr.push(...newArr)
console.log(arr)

//another example
const name = ["Dennis", "Wanjiru"]

const greet = (first, last, age) => {
	console.log(`Hey there ${first} ${last}`)
}

greet(...name)