## 两数之和

题目链接：[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

```js
var addTwoNumbers = function(l1, l2) {
    // dummyHead虚拟头节点，用于保存合并后的链表
    const dummyHead = new ListNode(0)
    // 当前处理的指针，每次通过curr.next构造新节点
    let curr = dummyHead, carry = 0

    while (l1 || l2 || carry > 0) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const sum = val1 + val2 + carry

        curr.next = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)

        l1 = l1 && l1.next
        l2 = l2 && l2.next
        curr = curr.next
    }

    return dummyHead.next
};
```
