## 二叉树的层序遍历

题目链接：[102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

### BFS

```js
var levelOrder = function(root) {
    if (!root) return []

    const queue = [root]
    const res = []

    while (queue.length > 0) {
        const size = queue.length
        const level = []

        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            level.push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        res.push(level)
    }

    return res
};
```

### DFS

```js
var levelOrder = function(root) {
    const res = []

    const dfs = (level, root) => {
        if (!root) return
        if (level === res.length) {
            res[level] = []
        }

        res[level].push(root.val)

        dfs(level + 1, root.left)
        dfs(level + 1, root.right)
    }

    dfs(0, root)

    return res
};
```
