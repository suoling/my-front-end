class Node {
  constructor (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class DoubleLink {
  constructor () {
    this.head = null
    this.tail = null
  }
  findFromHead (oldEle) {
    let curNode = this.head
    let targetNode = null
    let flag = true
    while (flag) {
        if (curNode === null) {
            flag = false
        } else if (curNode.element !== oldEle && curNode.next === null) {
            flag = false
        } else if (curNode.element === oldEle) {
            flag = false
            targetNode = curNode
        } else {
            while (curNode.element !== oldEle && curNode.next !== null) {
                curNode = curNode.next
            }
        }
    }
    return targetNode
  }
  insertBefore (newEle, oldEle) {
    let newNode = new Node(newEle)
    let oldNode = this.findFromHead(oldEle)
    if (oldNode === null) {
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
    } else {
        oldNode.prev.next = newNode
        newNode.next = oldNode
        newNode.prev = oldNode.prev
        oldNode.prev = newNode
    }
  }
  remove (ele) {
    let curNode = this.findFromHead(ele)
    if (curNode === null) {
        return
    } else{
        if (curNode.prev === null && curNode.next !== null) {
            this.head = curNode.next
            this.head.prev = null
        } else if (curNode.next === null && curNode.prev !== null) {
            this.tail = curNode.prev
            this.tail.next = null
        } else if (curNode.prev === null && curNode.next === null) {
            this.head = null
            this.tail = null
        } else {
            curNode.prev.next = curNode.next
            curNode.next.prev = curNode.prev
        }

    }
  }
  update (newEle, oldEle) {
    let oldNode = this.findFromHead(oldEle)
    if (oldNode === null) {
        return
    } else {
        oldNode.element = newEle
    }
  }
  display () {
    let curNode = this.head
    if (curNode === null) {
        console.log('空链表')
    } else {
        while (curNode !== null) {
            console.log(curNode.element)
            curNode = curNode.next
        }
    }
  }
}

let doubleLink = new DoubleLink()

doubleLink.insertBefore('a')
doubleLink.insertBefore(1)
doubleLink.insertBefore(2, 1)
doubleLink.insertBefore(4, 8)
doubleLink.insertBefore(3, 4)
doubleLink.display()
console.log('---------')
doubleLink.update('c', 10)
doubleLink.update('b', 2)
doubleLink.display()
console.log('---------')
doubleLink.remove('b')
doubleLink.display()
console.log('---------')
doubleLink.remove('a')
doubleLink.display()
console.log('---------')
doubleLink.remove(4)
doubleLink.display()