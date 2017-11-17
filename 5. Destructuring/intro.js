const person = {
	name: "Creez",
	twitter: "@_denniswanjiru",
	age: 23,
	city: "Nairobi"
}

const { name, twitter, city, age} = person;
console.log(name);
console.log(twitter);
console.log(city);
console.log(age);

const nigga = {
	name: "Creez",
	links: {
		social: {
			twitter: "@_denniswanjiru",
			instagram: "@dennis_wanjiru",
		}
	},
	age: 23,
	city: "Nairobi"
}

const { twitter: tweet, instagram } = nigga.links.social;

console.log(tweet)
console.log(instagram)