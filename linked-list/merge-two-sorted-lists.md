## 合并两个有序链表

题目链接：[21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

### 迭代法

```js
var mergeTwoLists = function(l1, l2) {
    // 使用虚拟头节点也就是哨兵节点，便于头部操作
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
};
```

### 递归解法

```js
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  // 值较小的节点与剩下的节点合并
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};
```
