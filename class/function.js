//review of functions

// console.log("hello world");
function greet(salutation) {
	console.log(salutation);
}
// greet("hi");
// greet("hello world");

// copy-by-value vs copy-by-reference value
function addFive(num) {
	num + 5;
}

function modifyToFive(array) {
	array[0] = 5; // 'aabbcc'[0] = 5
}

let a = 5;
addFive(a); // passing in 'a' to function
console.log(a); // 10, 5

let arrA = [200]; // 'aabbcc'
modifyToFive(arrA); // passing in arrA to function
console.log(arrA); // [5], [5]

// C (what is an array in memory and how is it represented as binary?)
// int array of size 5, each int is 1 byte (8-bit) [1, 2, 3, 4, 5]
// 10000, 10008, 10016, 10024, 10032, 10040
// indexes in arrays tell us how many bits to offset from:
// 10000 + [0]*8, 10000 + [1]*8, 10000 + [2]*8, ...

let num = 5;
addFive(num);
console.log(num); // 5

let array = [200];
modifyToFive(array);
console.log(array); // [5]
