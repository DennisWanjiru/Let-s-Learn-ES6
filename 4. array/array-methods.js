/*====================================
      ___  _ ______  ___  ____
     / __|| '__/ _ \/ _ \ _  /
    | (__ | | |  __/  __/ / / 
     \___||_|  \___|\___//___|
     
=====================================*/

/*==============================================
            ARRAY METHODS
==============================================*/
/*

//Array.from()
const str = "abc hello you";
const splited = Array.from(str.split(" "));
console.log(splited);

console.log(Array.from([1, 2, 3], x => x*10));

//isArray
console.log(Array.isArray(splited))

//Array.of()
console.log(Array.of(1, 2, 3, 4)) //Creates an array of the passed args

console.log(Array.of("ab", "ac", "ad"))

console.log(Array.of(3)) //Creates an array of the passed args

// new Array
console.log(new Array(1, 2, 3)) //Creates an array of the passed args

console.log(new Array(3)) //A single number arg implies the length of the array

console.log(new Array("ab")) //A single string arg Creates an array of the passed string

//concat method(Array)
const arr1 = [1, 2, 4, 5]
const arr2 = ["ab", "bc", "cd"];
const arr3 = arr2.concat(arr1)

console.log(arr3)

//entries method(Array)
let args = ["AB", "def", false].entries();
console.log(args.next().value)
console.log(args.next().value)
console.log(args.next().value)


//every method(Array)
const checkIfEven = (val, index, arr) => {
    if(val%2 === 0) {
        return true;
    } else {
        return false;
    }
}

const nums = [1, 2, 3, 4, 5];
const nums2 = [2, 4, 6, 8];
    
    
const checker = verify => {
    if(verify.every(checkIfEven))
        console.log("All are Even!")
    else
        console.log("Some are Odd!");
}    

checker(nums)
checker(nums2)

//EXAMPLE 2
const checkRange = function(val) {
    if (typeof val !== "number")
        return false
    else
        return val >= this.min && val <= this.max
} 
        
const obj = {min: 10, max: 20}

const myNums = [12, 10, 15, 17]

if(myNums.every(checkRange, obj)) 
    console.log("Within Range!")
else
    console.log("Beyond range!")

//fill method(Array)
let fillArr = [2, 3, 4, 5]
//console.log(fillArr.fill(7, -3))
//console.log(fillArr.fill(7, 3))
console.log(fillArr.fill(7, 0, -2))

//filter method(Array)
const arrFilter = ["el", true, 12, {name: "Dennis"} , "param"];
console.log(arrFilter.filter(el => typeof el === "string"))

//example 2
const objFilter = [
    {
        name: "Dennis",
        course: "BBIT"
    },

    {
        name: "Chris",
        course: "CS"
    },

    {
        name: "Natalie",
        course: "BBIT"
    },

    {
        name: "Zeal",
        course: "BBIT"
    },

    {
        name: "Davis",
        course: "IT"
    },
];

const geeks = objFilter.filter((geek) => geek.course !== "BBIT")
console.log(geeks);

//findIndex Method

const arr = [3, "Creez", true, 5];

console.log(arr.findIndex(bool => typeof bool === "boolean"))


//foEach Method
const arr = [23, 10, 7];
const letters = ["Dennis", "Creez", "Wanjiru"]

let sum = 0;
arr.forEach(val => sum += val)
console.log(`Sum: ${sum}`)

letters.forEach((letter, index) => {
    console.log(`${index + 1}: ${letter}`)
})

//indexOf Method
const arr = [1, "ab", true, "cd", 2, true]
console.log(arr.indexOf("ab"))
console.log(arr.indexOf(true, 3))

// join method
console.log(arr.join(" "))

//keys method
const k = arr.keys();
console.log(k.next().value);
console.log(k.next().value);
console.log(k.next().value);

//lastIndexOf
console.log(arr.lastIndexOf(true))


//MAP METHOD
const capital = val => {
     return val.toUpperCase();
}

console.log(nums.map(r => (Math.PI * r*r).toFixed(0)))
console.log(string.map(capital))

//map with this
const obj = {
    divisor: 10,
    rem(val) { 
      return val % this.divisor
    } 
}

console.log(nums.map(obj.rem, obj))

//map with build-in js methods
console.log(nums.map(Math.sqrt))

//POP AND PUSH Methods
nums.push(1,2,3);
console.log(nums);
nums.pop();
console.log(nums);

//reduce method
nums.push(12, 34, 20, 45, 67);
console.log(nums.reduce((prev, curr) => prev + curr))
 //example 2
const appended = string.reduce((prev, curr) => `${prev}::${curr}`)
console.log(appended)

//example 3
console.log(Math.round(desc.reduce((prev, curr) => prev + curr)))

//example 4
const createArray = (prevArr, currVal) => {
    let nextArr;
    if(currVal >= 1 && currVal <= 10)
        nextArr = prevArr.concat(currVal)
    else
        nextArr = prevArr

    return nextArr
}

const emptyArr = new Array()
console.log(desc.reduce(createArray, emptyArr))

//example 5
const extractString = (prevArr, currVal) => {
    let stringArr;
    if (typeof currVal === "string") {
        stringArr = prevArr.concat(currVal)
    } else {
        stringArr = prevArr
    }

    return stringArr
} 

const emptyStr = new Array()

console.log(arr.reduce(extractString, emptyStr))

//reduceRight method
console.log(arr.reduceRight(extractString, emptyStr))

//example 2
nums.push(3,4,5)
const results = nums.map(val => val*val)
                    .reduceRight((prev, curr) => prev + curr)
console.log(results)

//example 3
const word = "retupmoc"

console.log(`the ${Array.from(word).reduceRight((prev, curr) => prev + curr)}`)

//reverse 
nums.push(0,1,2,3,4,5)
console.log(nums.reverse())

//exe 2
const word = "retupmoc"

console.log(`the ${Array.from(word).reverse().reduce((prev, curr) => prev + curr)}`)


//shift method
console.log(desc)
console.log(`Removed ${desc.shift()} from the array`)
console.log(desc)
console.log(`Removed ${desc.shift()} from the array`)
console.log(desc)

//return method
while(arr.length > 0) {
    console.log(arr)
    console.log(`Removed "${arr.shift()}" from the array`)
}

console.log('All elems were successfully removed form the array!')

//slice method
const newArr = desc.slice(0, -2);
console.log(newArr)
console.log(newArr.slice(-2))

*/

const arr = [1, "ab", true, "cd", 2, true, "creez"];
const nums = new Array()
const desc = [10, 9, 15, 4, 0, 5]
const string = ["melon","banana","apple","orange","lemon"];














































































































        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    



















