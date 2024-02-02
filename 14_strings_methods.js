//finding the lenght of string
let text = 'Hello, World!';
console.log(text.length); 

//accessing characters
console.log(text[0]); 
console.log(text.charAt(4)); 

//substring
console.log(text.substring(0, 4)); 


//concatenation
let firstName = 'Binayak';
let lastName = 'Lamsal';
let fullName = firstName.concat(' ', lastName);
console.log(fullName); 

//Changing case
let a = 'JavaScript';
console.log(a.toUpperCase()); 
console.log(a.toLowerCase()); 

//Replacing substrings
let m = 'Hello, World!';
let newm = m.replace('World', 'Universe');
console.log(newm); 
