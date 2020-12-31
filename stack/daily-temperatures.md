## 每日温度

题目链接：[739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)

单调栈：栈存储单调递减的序列，如果碰到比栈顶元素大的值，则说明该温度比它高了，则可以出栈；循环，直到栈为空或者温度没有升高。

```js
var dailyTemperatures = function(T) {
    const stack = []
    const len = T.length
    const res = new Array(len).fill(0)

    for (let i = 0; i < len; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            const preIndex = stack.pop()
            res[preIndex] = i - preIndex
        }
        stack.push(i)
    }

    return res
};
```
