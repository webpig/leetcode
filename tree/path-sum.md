## 路径总和

题目链接：[112. 路径总和](https://leetcode-cn.com/problems/path-sum/)

### DFS

```js
var hasPathSum = function(root, sum) {
    if (!root) return false
    if (!root.left && !root.right) return sum - root.val

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};
```

### BFS

```js
var hasPathSum = function(root, sum) {
    if (!root) return false

    const nodeQueue = [root]
    const sumQueue = [root.val]

    while (nodeQueue.length) {
        const size = nodeQueue.length

        for (let i = 0; i < size; i++) {
            const node = nodeQueue.shift()
            const currSum = sumQueue.shift()

            if (!node.left && !node.right && currSum === sum) {
                return true
            }

            if (node.left) {
                nodeQueue.push(node.left)
                sumQueue.push(currSum + node.left.val)
            }

            if (node.right) {
                nodeQueue.push(node.right)
                sumQueue.push(currSum + node.right.val)
            }
        }
    }

    return false
};
```
