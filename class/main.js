// main.js
// camelCasing - camel casing (main casing we'll be using in JavaScript)
// kebob-casing - kebob casing
// snake_casing - snake casing

// JS/Python (interpreted language, interpreter program) -> interpreter executes the JS code line by line
// garbage collection: for memory management

// Java/C# (compiled / interpeted language) -> bytecode -> ported to differents computer (Java VM - Java only) -> executes intermediate bytecode or compiles into machine code -> runs it
// garbage collection: for memory management

// C/C++ (compiled) -> machine language (0,1) (x86) -> cpu executes/runs it
// No garbage collection - manual memory management
// Low energy cost / highly efficient / fast runtime / lower memory / low security and vulnerability

// ML framework runs on Python (Tensorflow, Pytorth, Scilearn, Numpy, Pandas)

// Intro to JS

// JS: Dynamically typed language
// Java, TypeScript (superset of JS), C#, Golang, C/C++: Statically typed language

var myFirstVariable = "hello world"; // assignment operator (=)
// console.log(typeof myFirstVariable);
// console.log(myFirstVariable);

// data types are data formats
// text -> string
// number -> number
// truthy/falsy values -> boolean
// an unassigned/undeclared variable -> undefined
// explicit declaration of absence of value -> null

myFirstVariable = 5; // reassign to a number (notice 'var' reserved keyword is not used)
// console.log(typeof myFirstVariable);
// console.log(myFirstVariable);

// JS primitive data types: string, number, boolean, undefined, null
var myName = "tai"; // string
var age = 10; // number
var active = true; // boolean (true, false)
var membership; // undefined - declare variable, but did not "assign" a value
var undef = undefined;
var dateCreated = null; // null is also a primitive data type used as falsy/zero value for all data types, not just "objects" as is the case in other languages

var result = null;
result = {};

// console.log(typeof membership);
// console.log(typeof undef);
// console.log(typeof dateCreated);

// other keywords for declaring variables - ES6
let x = 5; // 'let' allows for re-assignment
const y = 10; // 'const' does not allow for re-assignment

// reassign x, y with a diff value / diff data type
x = "tai";
// y = "tai";
let a; // declaring without assigning value
console.log(a); // 'let' also takes on undefined if not assigned a value
// const b; // declaring without assigning value

// re-declaring (using keyword 'var' 'let' 'const' again) vs re-assignment (only use '=')
// var greeting = "hi"
// var greeting = "hello"

// let salutation = "hi"
// let salutation = "hello"
