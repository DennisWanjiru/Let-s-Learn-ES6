
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
]






        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    



















