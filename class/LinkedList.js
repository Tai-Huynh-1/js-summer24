// {1} -> {3} -> {5} -> {10} -> {12} -> null
// {} -> {12}
class Node {
	val; // data to store in each node
	// prev;
	next; // a pointer referencing the next Node
	constructor(val = undefined, next = null) {
		this.val = val;
		this.next = next;
	}
}

// const n1 = new Node(1);
// const n5 = new Node(5);
// const n10 = new Node(10);
// n1.next = n5;
// n5.next = n10;
// const n3 = new Node(3);
// // added n3 between n1 and n5 in constant time (2 operations)
// n1.next = n3;
// n3.next = n5;
// console.log(n1);

// create a LinkedList DS
class LinkedList {
	sentinel; // ptr to first node
	size;
	constructor(val) {
		this.sentinel = new Node(); // create sentinel node
		this.size = 0;
		if (val) this.addLast(val);
	}

	getHead() {
		return this.sentinel.next;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.val + " -> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	// if added, return true
	// {} -> {1} -> {3} -> {5} -> {10} -> {12} -> null
	// {} -> {1} -> {3} -> null
	addLast(val) {
		// adding when list is empty (sentinel does not count towards list size)
		if (this.size === 0) {
			this.sentinel.next = new Node(val);
			this.size++;
			return true;
		}

		// adding when list already has items
		let curr = this.getHead();
		while (curr.next != null) {
			curr = curr.next;
		}
		curr.next = new Node(val);
		this.size++;
		return true;
	}

	/**
	 * Remove the last item in the list and return it. Return null if list is empty.
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removed = this.getHead().val;
			this.sentinel.next = null;
			this.size--;
			return removed;
		}

		let curr = this.getHead();
		while (curr.next.next !== null) {
			curr = curr.next;
		}
		const removed = curr.next.val;
		curr.next = null;
		this.size--;
		return removed;
	}

	// TODOS: Implement the methods below. Provide the time complexity for each method.

	/**
	 * Add val to beginning of the list.
	 * @param {*} val
	 */
	addFirst(val) {}

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
	 */
	removeFirst() {}

	/**
	 * Add the value (val) at the specified index in the list
	 * @param {*} index
	 * @param {*} val
	 */
	add(index, val) {}

	/**
	 * Check list for the target value. Return true if list contains target, else return false.
	 * @param {*} target - The target value to search for.
	 */
	contains(target) {}

	/**
	 * Return value at given index, else return undefined.
	 * @param {*} index
	 */
	get(index) {}

	/**
	 * Find the index of the target value. Return -1 if target is not found.
	 * @param {*} target
	 */
	indexOf(target) {}

	/**
	 * Return first item in list, without removing it.
	 */
	peekFirst() {}

	/**
	 * Return last item in list, without removing it.
	 */
	peekLast() {}
}

const list = new LinkedList();
list.addLast(3);
// list.addLast(5);
// list.addLast(7);
list.print();
console.log(list.removeLast());
list.print();
