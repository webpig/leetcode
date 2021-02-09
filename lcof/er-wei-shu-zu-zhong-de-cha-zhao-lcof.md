## 剑指 Offer 04. 二维数组中的查找

题目链接：[剑指 Offer 04. 二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

从右上角开始查找，如果小于 target 则向下移动，小于 target 则向左移动

```js
var findNumberIn2DArray = function(matrix, target) {
  const m = matrix.length
  if (m === 0) return false
  const n = matrix[0].length

  let i = 0, j = n - 1

  while (i < m && j >= 0) {
    const value = matrix[i][j]
    if (value > target) {
      j--
    } else if (value < target) {
      i++
    } else {
      return true
    }
  }

  return false
};
```
