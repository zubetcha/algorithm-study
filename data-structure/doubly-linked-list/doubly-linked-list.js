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

  pop() {
    if (!this.head || !this.length) {
      return undefined;
    }

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head || !this.length) {
      return undefined;
    }

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= list.length) {
      return null;
    }

    if (index <= list.length / 2) {
      let count = 0;
      let target = this.head;

      while (count <= list.length / 2) {
        if (count === index) {
          return target;
        }

        target = target.next;
        count++;
      }
    }

    if (index > list.length / 2) {
      let count = this.length - 1;
      let target = this.tail;

      while (count > this.length / 2) {
        if (count === index) {
          return target;
        }

        target = target.prev;
        count--;
      }
    }
  }
}

const list = new DoublyLinkedList();
list.push('One');
list.push('Two');
list.push('Three');

console.log(list);

list.unshift('Zero');

console.log(list);
