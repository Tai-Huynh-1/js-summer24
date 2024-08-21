// data structures and algo.

// search and time complexity of array vs object, MockMap class

// array read/search: O(N)
// array write/update: O(N) (resize, copy old elements over then add new element -> O(N) + O(1) = O(N))
// insertion with proper capacity: arr[endindex] = itemtoadd: O(1)

// listed list DS

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

const mockMap = new MockMap();
mockMap.set("h", "my secret value 42");
console.log(mockMap.get("h"));
