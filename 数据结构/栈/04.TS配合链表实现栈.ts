interface StackInterface<T> {
    enStack(val: T): void;
    deStack(): T
}

class StackLink<T> implements StackInterface<T> {
    private tail: Item<T>
    private size: number
    constructor () {
        this.tail = null
        this.size = 0
    }
    enStack (val: T): void {
        let curItem = new Item<T>()
        curItem.setVal(val)
        this.size++
        if (this.tail === null) {
            this.tail = curItem
        } else {
            this.tail.setNext(curItem)
            curItem.setPrev(this.tail)
            this.tail = curItem
        }
    }
    deStack (): T{
        let curItem = this.tail
        if (this.tail === null) {
            return null
        } else {
            this.tail = curItem.getPrev()
            this.size--
            return curItem.getVal()
        }
    }
    getSize () {
        return this.size
    }
}

class Item<T> {
    private curVal: T
    private prev: Item<T>
    private next: Item<T>
    constructor() {
        this.prev = null
        this.next = null
    }
    setVal (val: T) {
        this.curVal = val
    }
    setPrev (item: Item<T>) {
        this.prev = item
    }
    setNext (item: Item<T>) {
        this.next = item
    }
    getVal ():T {
        return this.curVal
    }
    getPrev ():Item<T> {
        return this.prev
    }
    getNext ():Item<T> {
        return this.next
    }
}

let strLink = new StackLink<String>()
strLink.enStack('a')
strLink.enStack('b')
strLink.enStack('c')
console.log(strLink.getSize())
console.log(strLink.deStack())
console.log(strLink.deStack())