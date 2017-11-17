const arr = ["Hello", "Dennis", 23, "Nairobi"];

const [greet, name, age, city] = arr;

console.log(greet, name, age, city)

const str = "jane, ken, harry, horan, zyne";

const [director, producer, ...artists] = str.split(",")
console.log(director, producer, artists)