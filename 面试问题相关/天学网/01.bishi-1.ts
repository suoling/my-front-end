class Queue<T> {
    private head: Item<T>;
    private tail: Item<T>;
    private size: number;
    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    enQueue (value: T) {
        let item= new Item<T>()
        item.setCurNode(value);
        if (this.head == null) {
            this.head = item;
            this.tail = item;
        } else {
            item.setPrev(this.tail);
            this.tail.setNext(item);
            this.tail = item;
        }
        this.size++
    }

    deQueue (): T {
        if (this.head == null) {
            return null
        } else {
            this.size--
            if (this.head == this.tail) {
                let item = this.head;
                this.head = null;
                this.tail = null;
                return item.getCurVal()
            } else {
                let item = this.head;
                this.head = item.getNext();
                this.head.setPrev(null)
                return item.getCurVal()
            }
        }
    }

    getSize () {
        return this.size
    }
}

class Item<T> {
    private curVal: T;
    private prev: Item<T>;
    private next: Item<T>;

    constructor(){

    }

    getCurVal (): T {
        return this.curVal
    }

    getPrev (): Item<T> {
        return this.prev
    }

    getNext (): Item<T> {
        return this.next
    }

    setCurNode (value: T) {
        this.curVal = value;
    }

    setPrev(item: Item<T>){
        this.prev = item;
    }

    setNext (item: Item<T>) {
        this.next = item;
    }
}

let queueNum = new Queue<number>()
queueNum.enQueue(1)
queueNum.enQueue(2)
console.log(queueNum.getSize())
console.log(queueNum.deQueue())
console.log(queueNum.deQueue())

let queueStr = new Queue<string>()
queueStr.enQueue("王锁伶")
queueStr.enQueue("药耀源")
console.log(queueStr.deQueue())
console.log(queueStr.deQueue())