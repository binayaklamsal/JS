// write a program to print the marks of student in an object using for loop.

let marks ={
    harry:90,
    shubam:56,
    lovish:9,
    monika:30
}
/*
for(let i=0; i<Object.keys(marks).length; i++){
     console.log("The marks of " + Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
}



//using for in loops
 for( let key in marks){
    console.log(" The marks of " + key + " are " + marks[key] )
 }


 let cn = 4
 let i
 while(i !=cn){
    const prompt = require('prompt-sync')();
    i = prompt("Enter a number")
    console.log("Try Again!!")
 }
 console.log("you have entered correct number")
 
 */


 // Q. Write a function to find mean of 5 numbers. 

 const mean = (a, b, c, d, e) => {
    return (a+ b+ c+ d+ e)/5
 }
 console.log("mean is ", mean(4,5,6,7,8))