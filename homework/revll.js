class ListNode {
	val;
	next;
	constructor(val = undefined, next = undefined) {
		this.val = val === undefined ? 0 : val; // 0 if val is undefined
		this.next = next === undefined ? null : next; // null if next is undefined
	}
}

// write the function to reverse the given list
function reverseList(head) {
	let prev = null;
	let curr = head;

	while (curr !== null) {
		let tempNext = curr.next;
		curr.next = prev;
		prev = curr;
		curr = tempNext;
	}
	return prev;
}

// write a function that takes in a head ListNode and print the list
// ex: [1, 2, 3, 4, 5]
// write your code here
function printList(head) {
	let curr = head;
	let result = [];
	while (curr !== null) {
		result.push(curr.val);
		curr = curr.next;
	}
	return result;
}

// Note that you will only be given the head of the list.
// You should create your own list and test it against the cases below
// here is how you create a list for the first example
const n5 = new ListNode(5, null);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const head = new ListNode(1, n2);
console.log(printList(head));
// then reverse the list then print the new list
console.log(printList(reverseList(head)));

// Ex 1: Input: list = [1, 2, 3, 4, 5]
// Output: list = [5, 4, 3, 2, 1]
// Ex 2: Input: list = [1, 2]
// Output: list = [2, 1]
// Ex 3: Input: list = []
// Output: list = []
