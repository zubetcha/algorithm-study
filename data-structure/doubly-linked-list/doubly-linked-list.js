
 
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

}

const first = new Node(10);
first.next = new Node(13);
first.next.prev = first;
 

const list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list)
