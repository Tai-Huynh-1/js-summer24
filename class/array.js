// create an array
const arrA = [];
console.log(arrA);

// update an array
arrA[1] = 999;
arrA[2] = 999.5;
arrA.push(1000);
arrA.push(1001, 1002, 1003);
arrA.push([1004, 1005, 1006]);
arrA[8] = {};
// arrA[1] = 999.3;

console.log(arrA);
// console.log(arrA[0]);
console.log(arrA.length);

// build array, start a index 1, add, index 7 add new item, try pushing some items to the array

// const itemRemoved = arrA.pop();
// console.log(arrA);

// try out Array.unshift() and .shift(), print removed item
// arrA.unshift(undefined);
// console.log(arrA);
// const removed = arrA.shift();
// console.log(removed);
// console.log(arrA);

const fruits = ["grapes", "apples", "oranges"];

function loopPrint(array) {
	console.log("about to START loop");
	for (let i = 0; i < array.length; i++) {
		const element = array[i]; // i = 0, 1, 2, 3
		console.log(`at index ${i}, the value is ${element}`);
	}
	console.log("about to END loop");
}

// loopPrint(arrA);
// loopPrint(fruits);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// sum array and print the sum before function ends
function sumList(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		sum = sum + element;
	}
	console.log(sum);
}

sumList(nums);
sumList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
