## 剑指 Offer 68 - II. 二叉树的最近公共祖先

题目链接：[剑指 Offer 68 - II. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)

有三种情况：

p，q一个在左子树一个在右子树

p，q都在左子树

p，q都在右子树

```js
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root
  if (!left || !right) return left || right
};
```
