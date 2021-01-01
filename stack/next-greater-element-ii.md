## 下一个更大元素 II

题目链接：[503. 下一个更大元素 II](https://leetcode-cn.com/problems/next-greater-element-ii/)

### 单调栈

```js
var nextGreaterElements = function(nums) {
    const len = nums.length
    const stack = []
    const res = new Array(len).fill(-1)

    // 因为是循环数组，这里将数组长度拉升为2，后面的元素就可以继续查找了
    for (let i = 0; i < 2 * len; i++) {
        const num = nums[i % len]
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            res[stack.pop()] = num
        }
        if (i < len) stack.push(i)
    }

    return res
};
```
