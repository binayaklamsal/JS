/*primitive data types:

there are 7 primitive data types
NN SS BB U=Null, number, string, symbol, boolean, blint, undefined */

let a = null;
let b = 234;
let c = true;
let d = BigInt("786") + BigInt("4");
let e = "haryy";
let f = Symbol("Im a nice ");
let g = undefined;

console.log(a, b, c, d, e, f, g)

console.log(typeof d) // typeof is used  to check the data types of the 

/* objects:
objects are non primitive data types 
-objects are like dictionary in python
-basically it is used for mapping of an item for eg: given student belongs to which class room
*/


const item = {
    "Binayak" : true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Binayak"])