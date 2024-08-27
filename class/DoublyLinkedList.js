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
		const newNode = new Node(data, this.last); // new node
		this.last.next = newNode;
		this.last = newNode; // reassign the last ptr to new node
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
	 *
	 * @param {*} data
	 */
	addFirst(data) {}
}

const lst = new DoublyLinkedList(0);
lst.addLast(3);
lst.addLast(5);
lst.addLast(7);
lst.print();
lst.printBackward();

lst.removeLast();
lst.print();
lst.printBackward();
