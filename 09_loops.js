// For loops



//sum of first n natural numbers

const prompt = require('prompt-sync')();
let n = prompt("Enter the value of n ?");
n = Number.parseInt(n)
let sum = 0
for( let i=0; i<n; i++){
    sum = sum + (i+1)
}
console.log("sum of first " + n + " natural numbers is "+sum)


 /*

//find factorial 
const prompt = require('prompt-sync')();
let n = prompt("Enter the value of n ?");
n = Number.parseInt(n)
let fact = 1
for( let i=0; i<n; i++){
    fact = fact * (i+1)
}
console.log("Factoral of " + n + " is " + fact)

*/

// For in loops

let obj = {
    haryy: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv:23
}
for( let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}