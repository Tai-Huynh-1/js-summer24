// compare values

// one equal sign: assignment operator

// triple equal sign: compares type (if diff type, returns false) then compares value
// console.log("7" === 7); // false
// console.log(7 === 7); // true
// console.log(8 === 7); // false

// double equal sign: convert into same type (if diff) then compare values
// console.log("7" == 7); // true
// console.log(7 == 7); // true
// console.log(8 == 7); // false

// // other primitives
// console.log(0 === false); // false
// console.log(0 == false); // true

// compare primitives
let a = 5;
let b = a; // 5 (b is copied-by-value ONCE)
let c = 5;

// console.log("a === c", a === c); // true
// console.log("a === b", a === b); // true
// console.log("b === c", b === c); // true

// a = 10;
// console.log("a === c", a === c); // 10 === 5 false -> false
// console.log("a === b", a === b); // 10 === 10 true -> 10 === 5 false (b is copied-by-value ONCE)
// console.log("b === c", b === c); // 10 === 5 false -> 5 === 5 true

// comparing arrays (copy-by-value, but copying the reference memory address -> copy-by-reference value)
const arrA = [10]; // 'ab10ef'
const arrB = arrA; // 'ab10ef'
const arrC = [10]; // 'ec45ba'
const arrD = [10]; // 'bae65f'

console.log("arrA === arrB", arrA === arrB); // 'ab10ef' === 'ab10ef' true
console.log("arrA === arrC", arrA === arrC); // 'ab10ef' === 'ec45ba' false
console.log("arrC === arrD", arrC === arrD); // 'ec45ba' === 'bae65f' false

arrA[0] = 100;
console.log("arrA", arrA); // [100]
console.log("arrB", arrB); // [100]
console.log("arrC", arrC); // [10]
console.log("arrA === arrB", arrA === arrB); // true, true, true
