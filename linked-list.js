class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    // this.tail = null
    this.length = 0
  }

  addToHead(val) {
		// Create a new node with the given value
		const newNode = new LinkedListNode(val)

		// Set the node's `next` pointer to the list's current head pointer
		newNode.next = head

		// Set the list head to point to the new link
		head = newNode
	}

  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;