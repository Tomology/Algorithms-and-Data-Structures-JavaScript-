/**
 * Initialize your data structure here.
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


function catArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        console.log(`${i} element is equal to ${j} element`)
      }
    }
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  // If index out of range
  if (index < 0 || index > this.size || this.size === 0) {
    return -1;
  }

  let current = this.head;
  let count = 0;

  while (current) {
    if (count === index) {
      return current.data;
    }
    count++;
    current = current.next;
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.head = new Node(val, this.head);
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val);
  let current;

  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  // If index out of range
  if (index < 0 || index > this.size) {
    return;
  }
  // If index is 0
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  // If index is list length
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let node = new Node(val);
  let current, previous;

  current = this.head;
  let count = 0;
  while (count < index) {
    previous = current; // Node before index
    count++;
    current = current.next; // Node after index
  }
  node.next = current;
  previous.next = node;
  this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.size - 1) {
    return;
  }

  let current = this.head;
  let previous;
  let count = 0;

  // Remove first
  if (index === 0) {
    this.head = current.next;
    return;
  } else {
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = new MyLinkedList()
 * let param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let ll = new MyLinkedList();

ll.addAtHead(7);
console.log(ll);
ll.addAtHead(2);
console.log(ll);
ll.addAtHead(1);
console.log(ll);
ll.addAtIndex(3, 0);
console.log(ll);
ll.deleteAtIndex(2);
console.log(ll);
ll.addAtHead(6);
console.log(ll);
ll.addAtTail(4);
console.log(ll);
ll.get(4);
