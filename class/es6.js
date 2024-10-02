// ES6 was a major JS update , here are some common features:

// Default parameters for functions
function multiply(a = 1, b = 1) {
	return a * b;
}
const multi = (a = 1, b = 1) => a * b;

// Rest parameters for passing an unspecified amount of arguments to a function
// Your function aggregates the arguments into an "args" array
function add(...args) {
	// "args" is an array of all the inputs [5, 8, 6, 4, 5, 4, 8, 5]
	return args.reduce((acc, curr) => acc + curr, 0);
}
// console.log(add(5, 8, 6, 4, 5, 4, 8, 5));

// Spread operator (shallow copy - copy-by-reference value)
const arrA = [100, 800];
const arrB = [1, 2, [44, 55]];
const arrC = [...arrA, arrB]; // [100, 800, [1, 2, [44, 55]] ]
const arrD = [...arrA, ...arrB]; // [ 100, 800, 1, 2, [44, 55] ] - [ 100, 800, 1, 2, [44, 55] ]
arrA[1] = 1000;
arrB[2][1] = 66;
// console.log(arrD);
// [arrA, arrB] => [[100, 800], [1, 2, [44, 55]]]

const obj1 = {
	firstName: "jack",
	lastName: "sparrow",
	address: {
		mailing: "321 Main St",
	},
};

const obj2 = { ...obj1 };
// console.log(obj2);
// obj1.address.mailing = "123 Main St";
// console.log(obj2);

const user = {
	firstName: "Jack",
	lastName: "Sparrow",
	address: {
		// 10000
		mailingAddress: "123 Wall St.",
		shippingAddress: "321 Main St.",
	},
	courses: ["cs101", "math8"], // 10004
};

const user2 = { newFirstPropery: 1, ...user, lastName: "Parrot" };
// console.log(user2);
// console.log("user === user2", user === user2); // false
// console.log("user.address === user2.address", user.address === user2.address); // true
// console.log("user.lastName === user2.lastName", user.lastName === user2.lastName); // "Sparrow" === "lastName" : false

// Array & Object destructuring
const mailingAddress = "jackson ave";
const firstName = "Jim";
// const lastName = user.lastName
const {
	firstName: userFirstName,
	address: { mailingAddress: userMailingAddress },
	courses: [_, math8],
} = user;
// console.log(mailingAddress);
// console.log(userMailingAddress);
// const bio101 = courses[10] // if too far down the list - don't use placeholders, just do this instead
// console.log("math8", math8);

// arrow functions
const add2 = (a, b) => a + b;

// high-order functions (HoF): functions that take in a(nother) function as a parameter AND/OR returns a function
// .map, .forEach, .filter, .reduce...

// function hof() {
// 	return function () {
// 		return 2 * 5;
// 	};
// }
// console.log(hof()());

// closure: is created when a function is created, the closure guarantees that function will always have access
// to the variable in its lexical scope at the time of the function's creation
// we use this to hide variables
function outer(a) {
	return function (b) {
		return a + b;
	};
}

// const returnedFunc = outer(5);
// console.log(returnedFunc(6));

// hiding variables and exposing functionality usign closure & functional programming
function counter() {
	let counter = 0;

	function increase() {
		counter++;
		return counter;
	}

	function decrease() {
		counter--;
		return counter;
	}

	function getCounter() {
		return counter;
	}

	return [getCounter, increase, decrease];
}

const [getCounterA, incA, decA] = counter();
const [getCounterB, incB, decB] = counter();

incA();
incA();
// console.log(getCounterA()); // 2
incB();
// console.log(getCounterA()); // 2
// console.log(getCounterB()); // 1

// pure function: function will not mutate its given input, the function should only work with resources given to it
// resources => function parameters
const original = [1, 2, 3, 4];

function impureFunc(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i] + 2;
	}
	return array;
}

function pureFunc(array) {
	const arr = [];
	for (let i = 0; i < array.length; i++) {
		arr[i] = array[i] + 2;
	}
	return arr;
}

// write a mock method to Array.prototype
Array.prototype.mockForEach = function (cb) {
	for (let i = 0; i < this.length; i++) {
		const element = this[i];
		cb(element, i, this);
	}
};

Array.prototype.mockMap = function (cb) {
	const newArray = [];
	for (let i = 0; i < this.length; i++) {
		const element = this[i];
		const returned = cb(element, i, this);
		newArray.push(returned);
	}
	return newArray;
};

original.mockForEach((el, idx, array) => {
	array[idx] = el * 2;
	return;
});

// console.log(
// 	original.mockMap((el) => {
// 		return el * 4;
// 	})
// );

// console.log(original);

// loop over objects
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
	const val = object[key];
	console.log(`key: ${key}: val: ${val}`);
}

// for-of loop for arrays
for (const el of original) {
	console.log(el);
}
