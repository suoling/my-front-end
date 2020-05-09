function Node (element) {
    this.element = element
    this.prev = null
    this.next = null
}

function DoubleLink () {
    this.head = null
    this.tail = null
}

DoubleLink.prototype = {
    findFromHead: function (oldEle) {
        let curNode = this.head
        let targetNode = null
        let flag = true
        while (flag) {
            if (curNode === null) {
                // 空链表
                flag = false
            } else if (curNode.element !== oldEle && curNode.next === null) {
                // 只有一个节点的时候
                flag = false
            } else if (curNode.element === oldEle) {
                // 匹配到参照元素
                flag = false
                targetNode = curNode
            } else {
                // 查找参照元素
                while (curNode.element !== oldEle && curNode.next !== null) {
                    curNode = curNode.next
                }
            }
        }
        return targetNode
    },
    insertBefore: function (newEle, oldEle) {
        let newNode = new Node(newEle)
        let oldNode = this.findFromHead(oldEle)
        if (oldNode === null) {
            // 参照元素不存在
            if (this.head === null) {
                // 空链表
                this.head = newNode
                this.tail = newNode
            } else {
                // 非空链表，默认插入到链表尾部
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode
            }
        } else {
            // 参照元素存在，插入到参照元素之前
            oldNode.prev.next = newNode
            newNode.next = oldNode
            newNode.prev = oldNode.prev
            oldNode.prev = newNode
        }

    },
    remove: function (ele) {
        let curNode = this.findFromHead(ele)
        if (curNode === null) {
            // 移除的节点在链表中不存在
            return
        } else{
            if (curNode.prev === null && curNode.next !== null) {
                // 移除的元素是头节点
                this.head = curNode.next
                this.head.prev = null
            } else if (curNode.next === null && curNode.prev !== null) {
                // 移除的元素是尾节点
                this.tail = curNode.prev
                this.tail.next = null
            } else if (curNode.prev === null && curNode.next === null) {
                // 链表中只有一个节点时
                this.head = null
                this.tail = null
            } else {
                // 长链表中移除中间的某个节点
                curNode.prev.next = curNode.next
                curNode.next.prev = curNode.prev
            }

        }
    },
    update: function (newEle, oldEle) {
        let oldNode = this.findFromHead(oldEle)
        if (oldNode === null) {
            return
        } else {
            oldNode.element = newEle
        }
    },
    display: function () {
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