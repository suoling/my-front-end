interface StackInterface<T> {
    enStack (val:T) :void;
    deStack():T
}

class StackArr<T> implements StackInterface<T> {
    private arr: T[]
    private len: number
    constructor () {
        this.arr = []
        this.len = 0
    }
    enStack (val: T) {
        this.arr[this.len] = val
        this.len++
    }
    deStack () {
        if (this.len === 0) {
            return null
        } else {
            let curEle = this.arr[this.len - 1]
            this.len--
            return curEle
        }
    }
    getSize () {
        return this.len
    }
}

let strArr = new StackArr<string>()
strArr.enStack('a')
strArr.enStack('b')
strArr.enStack('c')
console.log(strArr.getSize())
console.log(strArr.deStack())
console.log(strArr.deStack())