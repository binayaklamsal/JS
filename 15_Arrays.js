// creating an array

let fruits = ['Apple', 'Banana', 'Orange'];

//using array constructor
let colors = new Array('Red', 'Green', 'Blue');


//accessing elements
console.log(fruits[0]); 

//modifying elements
let cars = ['Skoda', 'bmw', 'audi'];
fruits[1] = 'maruti';
console.log(cars); 

//adding elements
let motors = ['skoda', 'bmw', 'audi'];
motors.push('maruti');

//removing elements
motors.pop();
console.log(motors);

//using loop on array
let students = ['ram', 'ravi', 'mukesh'];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}



let week = ['sun', 'mon', ' tue']
console.log(week[week.length-1])

