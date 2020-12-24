## 翻转二叉树

题目链接：[226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)

### 递归

```js
var mirrorTree = function(root) {
    if (!root) return null

    const left = root.left
    root.left = root.right
    root.right = left

    mirrorTree(root.left)
    mirrorTree(root.right)

    return root
};
```

### 使用栈

```js
var mirrorTree = function(root) {
    if (!root) return null

    const stack = [root]

    while (stack.length > 0) {
        const node = stack.pop()

        const temp = node.left
        node.left = node.right
        node.right = temp

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return root
};
```

### 使用队列

其实和栈一样

```js
var mirrorTree = function(root) {
    if (!root) return null

    const queue = [root]

    while (queue.length > 0) {
        const node = queue.shift()

        const temp = node.left
        node.left = node.right
        node.right = temp

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return root
};
```
