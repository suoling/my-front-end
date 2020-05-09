function Node(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

function StackLink() {
  this.tail = null;
}

StackLink.prototype = {
  enStack: function(ele) {
    let curNode = new Node(ele);
    if (this.tail === null) {
      this.tail = curNode;
    } else {
      this.tail.next = curNode;
      curNode.prev = this.tail;
      this.tail = curNode;
    }
  },
  deStack: function() {
    let curNode = this.tail;
    this.tail = curNode.prev;
    return curNode.element;
  },
  display: function() {
    let curNode = this.tail;
    let arr = [];
    while (curNode !== null) {
      arr.unshift(curNode.element);
      curNode = curNode.prev;
    }
    console.log(arr);
  }
};

let strStack = new StackLink();
strStack.enStack("a");
strStack.enStack("b");
strStack.enStack("c");
strStack.display();
console.log(strStack.deStack());
console.log(strStack.deStack());
