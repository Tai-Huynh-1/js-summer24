// Given an array integers/numbers, and a target
// Find 2 numbers that add up to the target number and return the index of those 2 numbers
// Ex: nums = [2, 11, 7, 15], target = 9
// Output: [0, 1] => 2 + 7 = 9

// N is length of nums array
// space: O(N)
// time: O(N)
function twoSum(nums, target) {
	const obj = {}; // {2: 0, 11: 1, }

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]; // 2, 11, 7
		const diff = target - num; // 7, -2, 2
		if (obj[diff] !== undefined) return [obj[diff], i]; // obj['7'] -> undefined, obj['-2'] -> undefined, obj['2'] -> 0
		obj[num] = i;
	}
	return [];
}

function twoSum2(nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]; // 2, 11, 7
		const diff = target - num; // 7, -2, 2
		if (map.has(diff)) return [map.get(diff), i];

		map.set(num, i);
	}
	return [];
}

// console.log(twoSum2([2, 11, 7, 15], 9));

function countLetter(sentence, targetLetter) {
	const map = new Map();

	const letters = sentence.split("");
	letters.forEach((letter) => {
		// if (map.has(letter)) map.set(letter, map.get(letter) + 1); // increment letter count by 1
		// else map.set(letter, 1); // set a new letter for first time, init. to 1

		map.set(letter, (map.get(letter) || 0) + 1);
	});

	return map.get(targetLetter) || 0;
}

console.log(countLetter("hello world", "r"));

//
function nSq(n) {
	let count = 1;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log("iteration count: ", count++);
		}
	}
}

// n = 10 -> 100 (10x)
// n = 100 (10x) -> 10,000 (100x)
// n = 1000 (10x) -> 1,000,000 (100x)
// nSq(1000);
