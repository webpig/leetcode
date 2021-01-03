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
