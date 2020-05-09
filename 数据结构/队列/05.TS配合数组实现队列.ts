interface QueueInterface<T> {
    enQueue(value: T): void;
    deQueue(): T
}

class QueueArr<T> implements QueueInterface<T> {
    private arr: T[]
    private len: number
    constructor () {
        this.arr = []
        this.len = 0
    }
    enQueue(value:T) {
        this.arr[this.len] = value
        this.len++
    }
    deQueue(): T {
        let ele = this.arr.shift()
        this.len--
        return ele
    }
}

let numArr = new QueueArr<Number>()
numArr.enQueue(1)
numArr.enQueue(2)
numArr.enQueue(3)
console.log(numArr.deQueue())
console.log(numArr.deQueue())
console.log(numArr.deQueue())
