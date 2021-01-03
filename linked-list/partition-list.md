## 分隔链表

题目链接：[86. 分隔链表](https://leetcode-cn.com/problems/partition-list/)

### 双指针

使用两个指针，一个指针指向较小的元素，另一个指针指向较大的元素。另外使用虚拟节点的技巧。

```js
var partition = function(head, x) {
    if (!head || !head.next) return head

    const smallHead = new ListNode(0)
    const bigHead = new ListNode(0)
    let small = smallHead
    let big = bigHead

    while (head) {
        if (head.val < x) {
            small.next = head
            small = small.next
        } else {
            big.next = head
            big = big.next
        }

        head = head.next
    }

    small.next = bigHead.next
    big.next = null

    return smallHead.next
};
```
