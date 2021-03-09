## 删除字符串中的所有相邻重复项

题目链接：[1047. 删除字符串中的所有相邻重复项](https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/)

### 使用栈，如果栈顶元素和当前遍历到的元素相等，则弹出栈顶，否则添加到栈。

```js
var removeDuplicates = function(S) {
    const stack = []

    for (let i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] === S[i]) {
            stack.pop()
        } else {
            stack.push(S[i])
        }
    }

    return stack.join('')
};
```