class Node {
  constructor(ele) {
    this.element = ele;
    this.prev = null;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enQueue(ele) {
    let curNode = new Node(ele);
    if (this.head === null) {
      this.head = curNode;
      this.tail = curNode;
    } else {
      this.tail.next = curNode;
      curNode.prev = this.tail;
      this.tail = curNode;
    }
  }
  deQueue() {
    let curNode = this.head;
    if (curNode === null) {
      return null;
    } else {
      this.head = curNode.next;
      return curNode.element;
    }
  }
  display() {
    let curNode = this.head;
    while (curNode !== null) {
      console.log(curNode.element);
      curNode = curNode.next;
    }
  }
}

let numLink = new LinkList();
numLink.enQueue(1);
numLink.enQueue(2);
numLink.enQueue(3);
numLink.enQueue(4);
numLink.display();
console.log(numLink.deQueue());
console.log(numLink.deQueue());
