// data structures and algo.

// search and time complexity of array vs object, MockMap class

// objects/map/hashmap read/search: O(1)
// objects/map/hashmap write/update: O(1)
class MockMap {
	array;
	arraySize;
	constructor() {
		this.array = [];
		this.arraySize = 10;
	}

	// O(1)
	set(key, value) {
		const hashIndex = this.keyToNumber(key) % this.arraySize; // 312 % 10 => 2
		console.log(`your value will be stored at index ${hashIndex}`);
		this.array[hashIndex] = value;
	}

	// O(1)
	get(key) {
		const hashIndex = this.keyToNumber(key) % this.arraySize; // 312 % 10 => 2
		console.log(`your value will be retrieved from index ${hashIndex}`);
		return this.array[hashIndex];
	}

	// return true if a key exist, false if it does not
	has(key) {}

	keyToNumber(key) {
		const chars = key.split(""); // ['c', 'a', 't'] | ['t', 'a', 'c'], // 97+99+116=312(cat)
		return chars.reduce((accu, char) => {
			const charCode = char.charCodeAt(0);
			return accu + charCode;
		}, 0);
	}
}

// const mockMap = new MockMap();
// mockMap.set("h", "my secret value 42");
// console.log(mockMap.get("h"));

// array read/search: O(1) if index is known - searching: O(N)
// array write/update: O(1) on update, O(N) (resize, copy old elements over then add new element -> O(N) + O(1) = O(N))
// insertion with proper capacity: arr[endindex] = itemtoadd: O(1)

// [{ value: 5, ...}, {value: 8, ...},...]
const arr = [5, 8, 9, 5, 4, 7, 6, 1, 10];
function linearSearch(arr, target) {
	let i = 0;
	while (i < arr.length) {
		const curr = arr[i];
		if (curr === target) {
			console.log(`Found at index: ${i} - took ${i + 1} iterations`);
			return;
		}
		i++;
	}
	console.log(`target does not exist - took ${i + 1} iterations`);
}

// console.log(linearSearch(arr, 1));

// binary search
// search: O(logN)
const bin = new Array(16384).fill(0).map((val, idx) => idx * 2);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...]

function binarySearch(sortedArr, target) {
	let left = 0;
	let right = sortedArr.length - 1;
	let iterCount = 0;

	while (left <= right) {
		iterCount++;
		const midIndex = Math.floor((right + left) / 2);
		const midVal = sortedArr[midIndex];

		if (midVal === target) {
			console.log(`Found at index: ${midIndex} - took ${iterCount} iterations`);
			return;
		} else if (midVal < target) {
			// move left ptr to mid + 1 (searching right half)
			left = midIndex + 1;
		} else {
			// (searching left half) move right ptr = mid - 1
			right = midIndex - 1;
		}
	}
	console.log(`target does not exist - took ${iterCount} iterations`);
}

// linearSearch(bin, 5000);
binarySearch(bin, 5000);

// listed list DS
