//review of functions

// console.log("hello world");
function greet(salutation) {
	console.log(salutation);
}
// greet("hi");
// greet("hello world");

// copy-by-value vs copy-by-reference value
function addFive(num) {
	num = num + 5;
}

function modifyToFive(array) {
	array[0] = 5; // 'aabbcc'[0] = 5
}

let a = 5;
addFive(a); // passing in 'a' to function
// console.log(a); // 10, 5

let arrA = [200]; // 'aabbcc'
modifyToFive(arrA); // passing in arrA to function
// console.log(arrA); // [5], [5]

// C (what is an array in memory and how is it represented as binary?)
// int array of size 5, each int is 1 byte (8-bit) [1, 2, 3, 4, 5]
// 10000, 10008, 10016, 10024, 10032, 10040
// indexes in arrays tell us how many bits to offset from:
// 10000 + [0]*8, 10000 + [1]*8, 10000 + [2]*8, ...

let num = 5;
addFive(num);
// console.log(num); // 5

let array = [200];
modifyToFive(array);
// console.log(array); // [5]

function greet2() {
	console.log("greeting 2 you");
}
// greet2();

// in math:
// function f(x) {
// 	return x + 1;
// }
// f(5); // 6

function printName(name) {
	const firstLetter = name.charAt(0); // name[0]

	if (firstLetter === "A") {
		console.log("name starts with letter A");
	} else if (firstLetter === "B") {
		console.log("name starts with letter B");
	} else if (firstLetter === "C") {
		console.log("name starts with letter C");
	} else {
		console.log("name starts with something else");
	}

	console.log("func ends");
}

function altPrintName(name) {
	const firstLetter = name.charAt(0); // name[0]

	if (firstLetter !== "A") {
		console.log("name starts with something else");
		console.log("func ends");
		return;
	}

	console.log("name starts with letter A");
	console.log("func ends");
}

// altPrintName("Zeta");

// return a value
function add(num) {
	let b = [1, 2]; // '10000'
	let c = 1;
	return num + 5;
}

// const returnedValue = add(6);
// console.log(add(6));

// call stack
// function print(val) {
// 	console.log(val);
// }
// const myLetterA = "A";
// const myLetterB = "B";

// console.log(myLetterA);
// print(myLetterB);

// print(add(5));

function isEven(num) {
	return num % 2 === 0;
}

// JS operators
function operator(num1, num2) {
	const num1IsEven = isEven(num1);
	const num2IsEven = isEven(num2);

	// && -> "and"
	// || -> "or"
	if (num1IsEven && num2IsEven) {
		console.log("both are even");
	} else if (isEven(num1) || isEven(num2)) {
		console.log("at least one number is even");
	} else if (num1 > num2) {
		// >, <, >=, <=
		console.log("num1 is greater than num2");
	}
}

function div(a, b) {
	return a / b;
}

function mult(a, b) {
	return a * b;
}
