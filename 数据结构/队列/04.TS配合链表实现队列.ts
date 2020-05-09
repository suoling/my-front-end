interface QueueInterface<T> {
  enQueue(value: T):void;
  deQueue():T
}

class QueueLink<T> implements QueueInterface<T> {
  private head: Item<T>
  private tail: Item<T>
  constructor () {
    this.head = null
    this.tail = null
  }
  enQueue(val: T) {
    let curItem = new Item<T>()
    curItem.setVal(val)
    if (this.head === null) {
      this.head = curItem
      this.tail = curItem
    } else {
      this.tail.setNext(curItem)
      curItem.setPrev(this.tail)
      this.tail = curItem
    }
  }
  deQueue():T {
    let curItem = this.head
    if (curItem === null) {
      return null
    } else {
      this.head = curItem.getNext()
      return curItem.getVal()
    }
  }
}

class Item<T> {
  private element: T
  private prev: Item<T>
  private next: Item<T>
  constructor () {
    this.prev = null
    this.next = null
  }
  setVal (value: T) {
    this.element = value
  }
  setPrev (item: Item<T>) {
    this.prev = item
  }
  setNext (item: Item<T>) {
    this.next = item
  }
  getVal (): T {
    return this.element
  }
  getPrev (): Item<T> {
    return this.prev
  }
  getNext (): Item<T> {
    return this.next
  }
}

let numLink = new QueueLink<Number>()
numLink.enQueue(1)
numLink.enQueue(2)
numLink.enQueue(3)
console.log(numLink.deQueue())
console.log(numLink.deQueue())