class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(val) {
        this.head = new ListNode(val)
        this.size = 1
    }

    append(val) {
        if (!this.head) {
            this.head = new ListNode(val)
            return
        }

        const newNode = new ListNode(val)
        let p = this.head

        while (p.next) {
            p = p.next
        }

        p.next = newNode
        this.size++
    }

    deleteByVal(val) {
        // 虚拟头节点，便于删除头节点
        const dummyHead = new ListNode(0)
        dummyHead.next = this.head
        let p = dummyHead

        while (p.next && p.next.val !== val) {
            p = p.next
        }

        // 不存在该节点，返回-1
        if (!p.next) {
            return -1
        }

        p.next = p.next.next
        this.head = dummyHead.next
        this.size--
    }

    deleteByIndex(index) {
        if (index > this.size || index <= 0) {
            return -1
        }

        const dummyHead = new ListNode(0)
        dummyHead.next = this.head
        let p = dummyHead, i = 1

        while (p.next && i !== index) {
            p = p.next
            i++
        }

        p.next = p.next.next
        this.head = dummyHead.next
        this.size--
    }

    traversal() {
        const res = []
        let p = this.head

        while (p) {
            res.push(p.val)
            p = p.next
        }

        console.log(res)
    }
}


const linkedList = new LinkedList(0)
linkedList.traversal() // [0]
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.traversal() // [0, 1, 2, 3]
linkedList.deleteByVal(3)
linkedList.traversal() // [0, 1, 2]
linkedList.deleteByVal(0)
linkedList.traversal() // [1, 2]
console.log(linkedList.deleteByVal(0)) // -1
linkedList.deleteByIndex(1)
linkedList.traversal() // [2]
linkedList.deleteByIndex(1)
linkedList.traversal() // []
console.log(linkedList.deleteByIndex(1)) // -1

class DLinkedListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

class DLinkedList {
    constructor() {
        this.dummyHead = new DLinkedListNode('head')
        this.dummyTail = new DLinkedListNode('tail')
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    append(val) {
        const newNode = new DLinkedListNode(val)

        newNode.next = this.dummyTail
        newNode.prev = this.dummyTail.prev
        this.dummyTail.prev.next = newNode
        this.dummyTail.prev = newNode
    }

    traversal() {
        let p = this.dummyHead.next
        const res = []

        while (p && p.next) {
            res.push(p.val)
            p = p.next
        }

        console.log(res)
    }
}

const dLinkedList = new DLinkedList()
dLinkedList.append(1)
dLinkedList.append(2)
dLinkedList.append(3)
dLinkedList.append(4)
dLinkedList.append(5)
dLinkedList.traversal() // [ 1, 2, 3, 4, 5]
