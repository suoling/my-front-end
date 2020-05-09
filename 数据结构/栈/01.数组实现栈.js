class Stack {
  constructor() {
    this.arr = [];
    this.len = 0;
  }
  enStack(value) {
    this.arr[this.len] = value;
    this.len++;
  }
  deStack() {
    let ele = this.arr[this.len - 1];
    this.arr.length = this.len - 1;
    this.len--;
    return ele;
  }
  display() {
    this.arr.forEach(function(item) {
      console.log(item);
    });
  }
}

let strStack = new Stack();
strStack.enStack("a");
strStack.enStack("b");
strStack.enStack("c");
strStack.display();
console.log(strStack.deStack());
console.log(strStack.deStack());
