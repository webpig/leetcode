## 二叉树的右视图

题目链接：[199. 二叉树的右视图](https://leetcode-cn.com/problems/binary-tree-right-side-view/)

### DFS

```js
var rightSideView = function(root) {
    const res = []

    const dfs = (root, depth) => {
        if (!root) return

        if (depth === res.length) {
            res.push(root.val)
        }

        dfs(root.right, depth + 1)
        dfs(root.left, depth + 1)
    }

    dfs(root, 0)

    return res
};
```

### BFS

```js
var rightSideView = function(root) {
    if (!root) return []

    const res = []
    const queue = [root]

    while (queue.length) {
        const size = queue.length

        res.push(queue[0].val)

        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            if (node.right) queue.push(node.right)
            if (node.left) queue.push(node.left)
        }
    }

    return res
};
```
