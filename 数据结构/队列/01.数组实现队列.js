// 队列-先进先出
class Queue {
  constructor() {
    this.arr = [];
    this.len = 0;
  }
  enQueue(ele) {
    this.arr.push(ele);
    this.len++;
    console.log(this.arr);
  }
  deQueue() {
    this.arr.shift();
    console.log(this.arr);
  }
  display() {
    console.log(this.arr);
  }
}

let arrQueue = new Queue();
arrQueue.enQueue(1);
arrQueue.enQueue(2);
arrQueue.enQueue(3);
arrQueue.enQueue(4);
arrQueue.deQueue();
arrQueue.deQueue();
