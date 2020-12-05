## 反转链表

题目链接：[206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)


#### 迭代法

这题我们可以使用双指针，`prev` 为上一个节点，`curr` 为当前节点；然后每次将 `curr.next` 设置为 `prev`；以此循环，则实现了链表的反转。具体代码实现如下:

```js
var reverseList = function(head) {
    let prev = null, curr = head

    while (curr) {
    	// 需要保存 curr.next，不然进行不了下一步操作了
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};
```

#### 递归解法

我们要反转当前的节点，则要确定当前节点之后的节点都已经反转了，然后将当前节点与下个已反转节点的头节点进行连接即可。
确定终止条件：当没有元素或者只剩下一个元素，则不需要反转了，直接返回该节点即可。

```js
var reverseList = function(head) {
    if (!head || !head.next) return head

    const p = reverseList(head.next)
    // 这一步很关键，即将当前节点链接到下个节点的next指针上。实现最终的反转
    head.next.next = head
    // 最后反转后，要将当前指针next设置为null
    head.next = null

    return p
};
```
