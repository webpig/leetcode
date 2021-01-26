## 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先

题目链接：[剑指 Offer 68 - I. 二叉搜索树的最近公共祖先](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/)

```js
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null

  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }

  return root
};
```
