// 7
function longestWord(sen) {
	const words = sen.split(" ");
	return words.reduce((longest, curr) => {
		if (curr.length > longest.length) return curr;
		return longest;
	}, "");
}

const sentence = " We are having the Javascript class";
// console.log(longestWord(sentence));

// time complexity
// space complexity
// 2 palindrome
function isPalindrome(str) {
	// str length => N
	// space: O(N)
	// time: N + N/2 + N => N + N/2 + N => 2N + N/2 + 3N^3 => N + N + N^3 => 2N + N^3 => N => O(N) time complexity
	// N + N + N => 3N => N => O(N)
	// return str === str.split("").reverse().join("");

	// N*log(N) - best general purpose sorting algo.
	// space: O(1) constant space
	// time: N/2 => O(N)
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}

const originalstring = "kayak";

console.log(isPalindrome(originalstring));

//palindrome words :kayak,MoM,Madam,Noon
