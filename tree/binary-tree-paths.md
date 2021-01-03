## 二叉树的所有路径

题目链接：[257. 二叉树的所有路径](https://leetcode-cn.com/problems/binary-tree-paths/)

### DFS

```js
var binaryTreePaths = function(root) {
    const res = []

    const dfs = (root, path) => {
        if (!root) return

        if (!root.left && !root.right) {
            path += root.val
            res.push(path)
            return
        }

        path += root.val + '->'
        dfs(root.left, path)
        dfs(root.right, path)
    }

    dfs(root, '')

    return res
};
```

### BFS

```js
var binaryTreePaths = function(root) {
    if (!root) return []

    const queue = [root]
    const path = [root.val.toString()]
    const res = []

    while (queue.length > 0) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const node = queue.shift()
            const str = path.shift()

            if (!node.left && !node.right) {
                res.push(str)
            }

            if (node.left) {
                queue.push(node.left)
                path.push(str + '->' + node.left.val)
            }

            if (node.right) {
                queue.push(node.right)
                path.push(str + '->' + node.right.val)
            }
        }
    }

    return res
};
```
