## 二叉搜索树中的众数

题目链接：[501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)


### 中序遍历

BST的中序遍历结果是有序的，我们可以通过判断当前节点与上个节点是否相等来记录出现次数，并且使用max来记录最大出现次数。
当 count === max 时将当前值添加，当 count > max 时将之前存储的结果清空并添加新的值。

```js
var findMode = function(root) {
    let res = []
    let prev = null
    let count = 0
    let max = 0

    const dfs = (root) => {
        if (!root) return

        dfs(root.left)

        if (prev === root.val) {
            count++
        } else {
            prev = root.val
            count = 1
        }

        if (count === max) {
            res.push(prev)
        }

        if (count > max) {
            res = [prev]
            max = count
        }

        dfs(root.right)
    }

    dfs(root)

    return res
};

```
