console.log("hello" + " " + "world");
console.log("hello".concat(" world"));
let i = 0;
let val = 100;
console.log("index is: " + i + ", value is: " + val); // <----- string concatenation with "+"
console.log(`index is: ${i}, value is: ${val} `); // <------ template string literals
console.log("index is: ".concat(i, ", value is: ", val)); // .concat method
console.log("hello".includes());

// strings are primitives
// auto-boxing: temporarily place the primitive into a class to provide it with methods/properties it would otherwise not have. Allow it to act like an object

let myString = new String("Hello sunny day");
console.log(myString);

console.log("hello".length);
