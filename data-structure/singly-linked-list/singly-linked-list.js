// piece of data - val
// reference of next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // value를 인자로 받음
  // value를 이용하여 새로운 노드를 생성
  // list에 head가 없다면 head와 tail을 새로 생성한 노드로 설정
  // 그렇지 않다면 tail의 next에 새로 생성한 노드를 설정
  // length 증가
  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  // 리스트가 비어 있으면 undefined 반환
  // tail에 접근할 때까지 반복
  // 마지막에서 두 번째 노드의 next를 null로 재할당
  // 마지막에서 두 번째 노드를 tail로 설정
  // 리스트 length -1
  // 제거한 노드 반환
  pop() {
    if (this.length === 0) {
      this.head = null;
      this.tail = nul;

      return undefined;
    }

    let pre;
    let temp = this.head;

    while (temp) {
      if (temp.next === null) {
        pre.next = null;
        this.tail = pre;
        this.length--;

        return temp;
      }

      pre = temp;
      temp = temp.next;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currHead = this.head;
    this.head = currHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
console.log(list.push('HELLO'));
console.log(list.push('GOODBYE'));
console.log(list.push('HIHI'));