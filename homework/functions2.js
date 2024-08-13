// 1
function factorial(num) {
	if (num < 0) return -1;
	if (num === 0 || num === 1) return 1;

	let output = num;
	for (let i = num - 1; i > 0; i--) {
		output = output * i;
	}
	return output;
}

// console.log(factorial(5)); // 5* 4 * 3 * 2 *1

// 2 - [1,5,6]
function sumArray(array) {
	let sum = 0;
	// for (let i = 0; i < array.length; i++) {
	//     sum += array[i]
	// }

	// let i = 0;
	// while (i < array.length) {
	// 	sum += array[i];
	// 	i++;
	// }

	array.forEach((element) => {
		sum += element;
	});
	return sum;
}
console.log(sumArray([1, 5, 6]));

// 3 // hello
function reverse(str) {
	let output = "";
	let i = str.length - 1;
	while (i >= 0) {
		const letter = str[i]; // o, l, l, e, h
		output += letter;
		i--;
	}
	return output;
}
console.log(reverse("hello world"));

// temp = h
// extra: give ["o", "e", "l", "l", "h"], cannot create a new array
function reverseArray(array) {
	// write code here
	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		let temp = array[left]; // copy by value h
		array[left] = array[right]; // takes o and places in first position
		array[right] = temp; // reassign right to h
		left++;
		right--;
	}
	return array;
}
const hello = ["h", "e", "l", "l", "o"];
console.log(reverseArray(hello));
console.log(hello);
