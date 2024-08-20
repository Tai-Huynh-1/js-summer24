function countWords(sentence) {
	const words = sentence.split(" ");
	// const wordCount = {};

	// words.forEach((word) => {
	// 	if (word in wordCount) {
	// 		wordCount[word]++;
	// 	} else {
	// 		wordCount[word] = 1;
	// 	}
	// });

	const map = new Map();

	words.forEach((word) => {
		map.set(word, (map.get(word) || 0) + 1);
	});

	map.forEach((value, key) => {
		console.log([key, value]);
	});

	return map;
}
const sentence = "Hello World Welcome to Javascript to start";
// console.log(countWords(sentence));
