## 字母大小写全排列

题目链接：[784. 字母大小写全排列](https://leetcode-cn.com/problems/letter-case-permutation/)

对于每个字符，有两种处理情况：使用本身，使用另一种大小写形式

```js
// 数字不单独处理写法
var letterCasePermutation = function(S) {
  const res = []

  const dfs = (path, index) => {
    if (index >= S.length) {
      res.push(path)
      return
    }
    
    dfs(path + S[index].toUpperCase(), index + 1)
    dfs(path + S[index].toLowerCase(), index + 1)
  }

  dfs('', 0)

  // 数字也当作字符处理了，需要去重
  return [...new Set(res)]
};
```

```js
// 数字单独处理写法
var letterCasePermutation = function(S) {
  const res = []

  const dfs = (path, index) => {
    if (index >= S.length) {
      res.push(path)
      return
    }

    // 直接在这里处理数字，结果不会包含重复的
    if (/\d/.test(S[index])) {
      dfs(path + S[index], index + 1)
    } else {
      dfs(path + S[index].toUpperCase(), index + 1)
      dfs(path + S[index].toLowerCase(), index + 1)
    }
  }

  dfs('', 0)

  return res
};
```
