## 二叉树的遍历

### 前序遍历

前序：根-左-右

```js
// 递归，dfs依次对根节点，左子树，右子树做处理
var preorderTraversal = function(root) {
    const res = []

    const dfs = (root) => {
        if (root) {
            res.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
    }

    dfs(root)

    return res
};

// 迭代
var preorderTraversal = function(root) {
    if (!root) return []

    const res = []
    const stack = []

    while (stack.length || root) {
        while (root) {
            // 根
            res.push(root.val)
            stack.push(root)
            // 左
            root = root.left
        }

        root = stack.pop()
        // 右
        root = root.right
    }

    return res
};
```

### 中序遍历

中序：左-根-右

```js
// 递归，和前序差不多，顺序换一下
var inorderTraversal = function(root) {
    const res = []

    const dfs = (root) => {
        if (root) {
            dfs(root.left)
            res.push(root.val)
            dfs(root.right)
        }
    }

    dfs(root)

    return res
};

// 迭代
var inorderTraversal = function(root) {
    const res = []
    const stack = []
    
    while (stack.length || root) {
        while (root) {
            stack.push(root)
            // 左
            root = root.left
        }
        
        root = stack.pop()
        // 根
        res.push(root.val)
        // 右
        root = root.right
    }
};
```

### 后序遍历

后序：左-右-根

```js
// 递归，和前序差不多，顺序更换一下
var inorderTraversal = function(root) {
    const res = []

    const dfs = (root) => {
        if (root) {
            dfs(root.left)
            dfs(root.right)
            res.push(root.val)
        }
    }

    dfs(root)

    return res
};

// 迭代
var postorderTraversal = function(root) {
    if (!root) return []

    const res = []
    const stack = []
    // 标记访问过的节点，也可以使用哈希表
    let prev = null

    while (stack.length || root) {
        while (root) {
            stack.push(root)
            // 左
            root = root.left
        }

        root = stack.pop()

        if (root.right && root.right !== prev) {
            stack.push(root)
            // 右
            root = root.right
        } else {
            // 根
            res.push(root.val)
            prev = root
            root = null
        }
    }

    return res
};
```

递归方法比较简单，而且可以看成一个模板，只是顺序换一下。迭代方法的话就比较麻烦一点，需要我们去模拟递归栈工作方式。
