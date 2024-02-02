//Create a variable of type string and try to add a number of it

let a = "Binayak"
let b = 6
console.log(a+b)

// find data types of previuos question
console.log(typeof (a+b))

//create a const object in js , can you change it to hold a number later?
 const m = {
    name :"binayak",        // no we cannot hold
    section : 1,
    isPrinciple : false
 }

//try to add new key to the const object in Problem 3 were you to do it ?

const n = {
    name :"binayak",        
    section : 1,
    isPrinciple : false
 }
n['friend'] =  "Rejan"
n['name'] = n.name + ","+"" +" Arti"
console.log(n)

// write a js program to create a word-meaning dictionary of 5 words
const dict ={
    assault: "attack",
    Adjure: "Formal exertion on someone to do something",
    Badinage: "Witty conversation."
}
console.log(dict.Adjure)