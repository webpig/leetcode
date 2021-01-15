## 左叶子之和

题目链接：[404. 左叶子之和](https://leetcode-cn.com/problems/sum-of-left-leaves/)

### DFS

```js
var sumOfLeftLeaves = function(root) {
    let sum = 0

    const dfs = (root) => {
        if (!root) return

        if (root.left && !root.left.left && !root.left.right) {
            sum += root.left.val
        }

        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return sum
};
```

### BFS

```js
var sumOfLeftLeaves = function(root) {
    if (!root) return 0

    let sum = 0
    const queue = [root]

    while (queue.length) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            if (node.left && !node.left.left && !node.left.right) {
                sum += node.left.val
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return sum
};
```
