// compare values

// one equal sign: assignment operator

// triple equal sign: compares type (if diff type, returns false) then compares value
console.log("7" === 7); // false
console.log(7 === 7); // true
console.log(8 === 7); // false

// double equal sign: convert into same type (if diff) then compare values
console.log("7" == 7); // true
console.log(7 == 7); // true
console.log(8 == 7); // false

// other primitives
console.log(0 === false); // false
console.log(0 == false); // true
