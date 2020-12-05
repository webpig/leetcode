## 环形链表

题目链接：[141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

#### 使用 Set

```js
var hasCycle = function(head) {
    const set = new Set()
    let curr = head

    while (curr) {
        if (set.has(curr)) {
            return true
        }

        set.add(curr)
        curr = curr.next
    }

    return false
};
```

#### 快慢指针

这道题我们可以使用 `Set` 来解决，但是有另外一种更有意思的解法：快慢指针，快指针每次走两步，慢指针每次走一步，如果有环的话，快指针一定会追上慢指针。具体实现如下：

```js
var hasCycle = function(head) {
    let fast = head, slow = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next

        if (fast === slow) {
            return true
        }
    }

    return false
};
```
