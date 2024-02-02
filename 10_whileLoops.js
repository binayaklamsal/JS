// whileLoops.js
/*
const prompt = require('prompt-sync')();

let n = prompt("Enter the value of n ")
n = Number.parseInt(n)

let i = 0;
while(i<n){
    console.log(i)
    i++;
}
*/

const prompt = require('prompt-sync')();

let n = prompt("Enter the value of n ")
n = Number.parseInt(n)

let i = 10;
do{
    console.log(i)
    i++;
}while(i<n)