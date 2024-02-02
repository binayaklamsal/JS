/*const prompt = require('prompt-sync')();
 
let a = prompt("whats your age ?")
a = Number.parseInt(a) // converting string to number
if(a>0){
   console.error("This is a valid age");
}
else{
    console.error(" this is an invalid age")
} */

// if else if 
const prompt = require('prompt-sync')();
 
let a = prompt("whats your age ?")
if(a<0){
   alert("This is a valid age");
 }
else if(a<9){
     alert(" this is an invalid age");
 }
else if(a>=9 && a<18){
     alert(" this is an invalid age");
 }
else{
    alert(" this is a valid age");
 }


 //Explore switch statement and write a basic example
