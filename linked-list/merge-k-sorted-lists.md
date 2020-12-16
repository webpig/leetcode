## 合并K个升序链表

题目链接：[23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)

这题的基础是 [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

我们复习下：

```js
function mergeTwoSortedLists(l1, l2) {
    const dummyHead = new ListNode(0)
    let curr = dummyHead

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1
            l1 = l1.next
        } else {
            curr.next = l2
            l2 = l2.next
        }

        curr = curr.next
    }

    curr.next = l1 || l2

    return dummyHead.next
}
```

### 暴力解法

直接一个一个合并

```js
var mergeKLists = function(lists) {
    let res = null

    for (const list of lists) {
        res = mergeTwoSortedLists(res, list)
    }

    return res
};
```

### 分治

每次拆分成两半，直到最后为1个，最后两两合并。

```js
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    return merge(lists, 0, lists.length - 1)
};

function merge(lists, start, end) {
    if (start >= end) {
        return lists[start]
    }

    const mid = start + Math.floor((end - start) / 2)

    return mergeTwoSortedLists(merge(lists, start, mid), merge(lists, mid + 1, end))
}
```

### 堆

每次取出值最小的节点，然后将下个节点继续添加到堆中，直到堆中元素为空

```js
var mergeKLists = function(lists) {
    if (lists.length === 0) return null

    const dummyHead = new ListNode(0)
    let curr = dummyHead

    const heap = new Heap((a, b) => a.val - b.val)

    for (const list of lists) {
        if (list) {
            heap.add(list)
        }
    }

    while (heap.data.length > 0) {
        curr.next = heap.extractTop()
        curr = curr.next

        if (curr.next) {
            heap.add(curr.next)
        }
    }

    return dummyHead.next
};

class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn
        this.data = []
    }

    add(element) {
        this.data.push(element)
        let i = this.data.length - 1

        while (this.parent(i) >= 0 && this.compareFn(element, this.data[this.parent(i)]) < 0) {
            this.data[i] = this.data[this.parent(i)]
            i = this.parent(i)
        }

        this.data[i] = element
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    extractTop() {
        if (this.data.length <= 1) {
            return this.data.pop()
        }

        const top = this.data[0]
        this.data[0] = this.data.pop()
        const len = this.data.length
        const curr = this.data[0]
        let i = 0

        while (i < len) {
            let leftIndex = 2 * i + 1, rightIndex = 2 * i + 2
            let swap = null, leftChild = null, rightChild = null

            if (leftIndex < len) {
                leftChild = this.data[leftIndex]
                if (this.compareFn(leftChild, curr) < 0) {
                    swap = leftIndex
                }
            }

            if (rightIndex < len) {
                rightChild = this.data[rightIndex]
                if (
                    (swap === null && this.compareFn(rightChild, curr) < 0) ||
                    (swap !== null && this.compareFn(rightChild, leftChild) < 0)
                ) {
                    swap = rightIndex
                }
            }

            if (swap === null) break

            this.data[i] = this.data[swap]
            i = swap
        }

        this.data[i] = curr

        return top
    }
}
```

堆的相关链接：

[维基百科：堆（Heap）](https://en.wikipedia.org/wiki/Heap_(data_structure))

[https://www.digitalocean.com/community/tutorials/js-binary-heaps](https://www.digitalocean.com/community/tutorials/js-binary-heaps)
