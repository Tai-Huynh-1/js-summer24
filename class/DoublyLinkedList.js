class Node {
	data;
	prev;
	next;
	constructor(data = undefined, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		this.next = next;
	}
}

class DoublyLinkedList {
	sentinel; // ptr to first node (does not count toward size)
	last; // ptr to last node
	size;
	constructor(data = undefined) {
		this.sentinel = new Node();
		this.last = this.sentinel;
		this.size = 0;

		// add data if provided
		if (data !== undefined) this.addLast(data);
	}

	getHead() {
		return this.sentinel.next;
	}

	getLast() {
		return this.last;
	}

	print() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "{ ";
		let curr = this.getHead();
		while (curr !== null) {
			list += curr.data + " <-> ";
			curr = curr.next;
		}
		list = list + "null }";
		console.log(list, this.size);
	}

	printBackward() {
		if (this.size === 0) {
			console.log("{ }", this.size);
			return;
		}

		let list = "";
		let curr = this.getLast();
		while (curr.prev !== null && curr.prev.data !== undefined) {
			list = " <- " + curr.data + list;
			curr = curr.prev;
		}
		list = curr.data + list;
		list = "{ " + list + " }";
		console.log(list);
	}

	/**
	 * Add data to end of list.
	 * {} <-> {1} -> null
	 * {} <-> {1} <-> {2} -> null
	 * @param {*} data
	 * time: O(1)
	 */
	addLast(data) {
		const newNode = new Node(data, this.last, null); // new node
		this.last.next = newNode; // establish forward relationship
		this.last = newNode; // maintain/reassign the last ptr to new node
		this.size++;
	}

	/**
	 *
	 * @returns
	 * time: O(1)
	 */
	removeLast() {
		if (this.size === 0) return null; // list is empty

		if (this.size === 1) {
			const removedNode = this.getHead();
			this.sentinel.next = null;
			this.size--;
			return removedNode.data;
		}

		const lastToRemove = this.getLast();
		const secondToLast = lastToRemove.prev;
		secondToLast.next = null;
		this.last = secondToLast; // reassign new last node
		this.size--;
		return lastToRemove.data;
	}

	/**
	 * Add item to beginning of the list.
	 * @param {*} data
	 * {} <-> {N} <-> {1} <-> null
	 */
	addFirst(data) {
		if (this.size === 0) {
			this.addLast(data); // delegate to addLast to maintain last ptr
			return;
		}

		const currHead = this.getHead();
		const newNode = new Node(data, this.sentinel, currHead); // {} <-> {N} -> {1} <-> null
		this.sentinel.next = newNode;
		currHead.prev = newNode;
		this.size++;
	}

	// TODOS: Implement the methods below for the DoublyLinkedList class: removeFirst, remove, add, peekFirst, peekLast.
	// Provide the time complexity for each method.

	/**
	 * Remove the first item in the list and return it. Return null if list is empty.
	 */
	removeFirst() {}

	/**
	 * Remove item at the given index and return it if index is valid.
	 * @param {*} index
	 */
	remove(index) {}

	/**
	 * Add the data at the specified index in the list. Return boolean true if successful, else false.
	 * @param {*} index
	 * @param {*} data
	 */
	add(index, data) {}

	/**
	 * Return first item in list, without removing it.
	 */
	peekFirst() {}

	/**
	 * Return last item in list, without removing it.
	 */
	peekLast() {}
}

const lst = new DoublyLinkedList(0);
lst.addLast(3);
lst.addLast(5);
lst.addLast(7);
lst.print();
lst.printBackward();

lst.addFirst(-1);
lst.print();
lst.printBackward();
