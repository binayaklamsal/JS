// array mapping//

let numbers = [5, 7, 9, 2, null, 10];


let doubledNumbers = numbers.map(function(item) { // Q.Using the map method to double each number in the array
  return item === null ? -1 :item;
});

console.log(doubledNumbers);






//array filtering//


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = a.filter((item)=>item%2===0);

console.log(evenNumbers);


let newNum = a.filter((item, index) => {
  return item !== null;
});
console.log(newNum);

//find method - it is mostly used to filter single element 

const k = [1, 2, 3, 4, 5];

// Find the first element greater than 2
const foundNumber = k.find((element) => element > 2);

console.log(foundNumber); // Output: 3





//foreach loop//

let fruits = ['Apple', 'Banana', 'Orange'];


fruits.forEach(function(fruit) {  //// Using forEach to print each element
  console.log(fruit);
});

const m = [1, 2, 3, 4, 5, 6, 7]
m.forEach((item, index) =>{
  item%2 === 0 ? console.log(item, index, "even") : console.log(item, index, "odd")
})


// array concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = arr1.concat(arr2, arr3);

console.log(combined);


// array shift and unshift.
const arr = [1, 2, 3];
const shiftedElement = arr.shift();
console.log(shiftedElement)
const array = [2, 3];
const newLength = array.unshift(1);
console.log(newLength)



//array reduce method
const p = [1, 2, 3, 4, 5];

const Tsum = p.reduce((p1, p2) => {
  return p1 + p2;
}, 0);

console.log(Tsum);

//spread operator

// let newP = p; //sharing address not values
// newP[1] = {};
// console.log(newP, p)

let newP =[...p] // sharing values
newP[1] = {}
console.log(newP, p)                                                                                         