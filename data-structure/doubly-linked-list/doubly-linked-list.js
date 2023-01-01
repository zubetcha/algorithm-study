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
    // 유효하지 않은 인덱스 
    if (index < 0 || index >= list.length) {
      return null;
    }

    if (typeof index !== 'number') {
      throw new Error('매개변수는 number 타입만 받을 수 있습니다')
    }

    const lessThanHalf = index <= list.length / 2;
    let count = lessThanHalf ? 0 : this.length - 1;
    let current = lessThanHalf ? this.head : this.tail;

    if (lessThanHalf) {
      while (count !== index) {
        current = current.next;
        count++;
      }

      return current;
    }

    if (!lessThanHalf) {
      while (count !== index) {
        current = current.prev;
        count--;
      }

      return current;
    }
  }

  set(index, value) {
    let target = this.get(index);

    if (!target) {
      return false;
    }

    target.val = value;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push('One');
list.push('Two');
list.push('Three');

console.log(list);

list.unshift('Zero');

console.log(list.get(1))
console.log(list.get(3));
console.log(list.get('가나다'))
