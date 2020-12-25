## 剑指 Offer 26. 树的子结构

题目链接：[剑指 Offer 26. 树的子结构](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)

B是A的子结构，存在三种情况：

1、B的根节点与A的根节点重合

2、B在A的左子树中

3、B在A的右子树中

我们再看题目中的条件：约定空树不是任意一个树的子结构

那么我们可以先写出整体的逻辑：

```js
var isSubStructure = function(A, B) {
    if (!B || !A) return false
    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
```

首先看判断条件：B为空，不为任意一个树的子结构，直接返回false；如果B不为空，A为空，B就不可能是A的子结构了，那么也返回false。

下面一行代码就是开始说的三种情况。现在我们继续完善dfs逻辑。

以下代码是具体的处理过程，B是A的子结构，则需要保证A的某个子结构的根结点值和B根节点值相等，并且左子树和右子树也要符合条件，直到B为空。如果B不为空，A为空，就不符合条件了。

```js
function dfs(A, B) {
    if (!B) return true
    if (!A) return false
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right)
}
```
