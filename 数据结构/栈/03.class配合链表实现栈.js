class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class StackLink {
  constructor() {
    this.tail = null;
  }
  enStack(val) {
    let curNode = new Node(val);
    if (this.tail === null) {
      this.tail = curNode;
    } else {
      this.tail.next = curNode;
      curNode.prev = this.tail;
      this.tail = curNode;
    }
  }
  deStack() {
    let curNode = this.tail;
    if (curNode === null) {
      return null;
    } else {
      this.tail = curNode.prev;
      return curNode.element;
    }
  }
  display() {
    let curNode = this.tail;
    let arr = [];
    while (curNode !== null) {
      arr.unshift(curNode.element);
      curNode = curNode.prev;
    }
    console.log(arr);
  }
}

let strStack = new StackLink();
strStack.enStack("a");
strStack.enStack("b");
strStack.enStack("c");
strStack.display();
console.log(strStack.deStack());
console.log(strStack.deStack());
