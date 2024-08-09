const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
// 	// 10000 + 0 index * 8 bits = 10000
// 	// 10000 + 1 index * 8 bits = 10008
// 	const element = arr[i];
// 	console.log(element);
// }

// Array.forEach()
// arr.forEach(function (element, index, originalArray) { // callback function has access to 3 parameters
// arr.forEach(function (element) {
// 	// if only some parameters are needed, you can remove not needed parameters
// 	console.log(`el: ${element}`);
// });

// Array.map()
const newArray = arr.map(function (element) {
	return element * 100;
});
console.log("new array from .map(): ", newArray);
console.log(arr);

// given an array of fahrenheit temperatures, generate an array of celsius temps. using .map()
const fahrs = [0, 20, 40, 60, 80, 100, 120, 140];
const celsius = fahrs.map(function (fahr) {
	return ((fahr - 32) * 5) / 9;
});
// console.log("celsius: ", celsius);

// original function: function funcName(param1, param2, param3, ...) {}
// anonymous function (no function name needed): function (element, index, array) {}
// array function: const myArrFunc = (param1, param2, param3, ...) => {} | invoking: myArrFunc(arg1, arg2, ...)
// anonmyous arrow function: (param1, param2, param3, ...) => {} or (param1, param2, param3, ...) => ()

// call .map() with anonmyous arrow function
// (fahr) => ((fahr - 32) * 5) / 9
function fToC(fahr) {
	// console.log("...") // can do other stuff in here
	return ((fahr - 32) * 5) / 9;
}

function genCelsius(fahrenheitArray) {
	return fahrenheitArray.map((fahr) => fToC(fahr)); // refactor conversion into a function so you can do 1 liner here
}
const cel2 = genCelsius(fahrs);
console.log(cel2);
