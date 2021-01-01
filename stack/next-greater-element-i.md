## 下一个更大元素 I

题目链接：[496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)

### 单调栈 + 哈希表

```js
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map()
    const stack = []
    const res = []

    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }
        stack.push(num)
    }

    for (let i = 0; i < nums1.length; i++) {
        res[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1
    }

    return res
};
```
