## 找树左下角的值

题目链接：[513. 找树左下角的值](https://leetcode-cn.com/problems/find-bottom-left-tree-value/)

### DFS

```js
var findBottomLeftValue = function(root) {
    let res = root.val
    let max = 0

    const dfs = (root, level) => {
        if (!root) return
        if (level > max) {
            max = level
            res = root.val
        }

        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }

    dfs(root, 0)

    return res
};
```

### BFS

```js
var findBottomLeftValue = function(root) {
    const queue = [root]
    let res = root.val

    while (queue.length) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            if (i === 0) {
                res = node.val
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return res
};
```
