## 剑指 Offer 57. 和为s的两个数字

题目链接：[剑指 Offer 57. 和为s的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

### 暴力解法

循环嵌套，暴力遍历。时间复杂度太高，可能会超时。

```js
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]]
            }
        }
    }

    return -1
};
```

### 使用哈希表

使用Set存储数组元素，可以在O(1)的时间查找元素，在暴力的基础上将时间复杂度降到O(n)。

```js
var twoSum = function(nums, target) {
    const set = new Set()

    for (const num of nums) {
        const diff = target - num

        if (set.has(diff)) {
            return [diff, num]
        }

        set.add(num)
    }

    return -1
};
```

### 双指针

因为是递增顺序，所有我们可以使用双指针来查找。

```js
var twoSum = function(nums, target) {
    let l = 0, r = nums.length - 1

    while (l < r) {
        const sum = nums[l] + nums[r]

        if (sum === target) {
            return [nums[l], nums[r]]
        } else if (sum < target) {
            l++
        } else {
            r--
        }
    }

    return -1
};
```
