## 从中序与后序遍历序列构造二叉树

题目链接：[106. 从中序与后序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

### DFS

```js
var buildTree = function(inorder, postorder) {
    const map = new Map()
    inorder.forEach((item, i) => map.set(item, i))
    let i = postorder.length - 1

    const dfs = (start, end) => {
        if (start > end) return null

        const rootVal = postorder[i--]
        const root = new TreeNode(rootVal)
        const mid = map.get(rootVal)

        root.right = dfs(mid + 1, end)
        root.left = dfs(start, mid - 1)

        return root
    }

    return dfs(0, inorder.length - 1)
};
```
