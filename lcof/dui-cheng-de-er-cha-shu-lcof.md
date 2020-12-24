## 剑指 Offer 28. 对称的二叉树

题目链接：[剑指 Offer 28. 对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

### 递归

主要是确定终止条件以及主要处理逻辑

终止条件：等A和B都为null的时候，也就是全都遍历判断过了

处理逻辑：判断对称，也就是判断左子树和右子树是否一样，然后左子树的右子树和右子树的左子树比较。也就是：
设： left = root.left, right = root.right，要保证
`(left.val === right.val) && dfs(left.right, right.left) && dfs(left.left, right.right)`

```js
var isSymmetric = function(root) {
    if (!root) return true

    const dfs = (A, B) => {
        if (!A && !B) return true
        if (!A || !B) return false
        if (A.val !== B.val) return false
        return dfs(A.left, B.right) && dfs(A.right, B.left)
    }

    return dfs(root.left, root.right)
};
```

### 迭代

层序遍历：初始化队列包含两个root，然后每次取出两个比较是否符合条件，然后按照对称方式将新的子节点添加到队列中，直到队列为空。

```js
var isSymmetric = function(root) {
    if (!root) return true
    const queue = [root, root]

    while (queue.length > 0) {
        const a = queue.shift()
        const b = queue.shift()

        if (!a && !b) continue
        if (!a || !b || a.val !== b.val) return false

        queue.push(a.left)
        queue.push(b.right)

        queue.push(a.right)
        queue.push(b.left)
    }

    return true
};
```
