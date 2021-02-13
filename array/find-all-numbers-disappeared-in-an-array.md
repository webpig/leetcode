## 找到所有数组中消失的数字

题目链接：[448. 找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)

将每个元素放到对应的下标位置上，即 `nums[i]` 要放在 `nums[i] - 1` 下标位置，也就是 `nums[i] === i + 1`。

```js
var findDisappearedNumbers = function(nums) {
    const res = []
    const len = nums.length

    for (let i = 0; i < len; i++) {
        while (nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            res.push(i + 1)
        }
    }

    return res
};
```

将对应下标值标为负值，然后遍历查找正值，取其 `下标 + 1` 即为未出现的数字。

```js
var findDisappearedNumbers = function(nums) {
    const res = []
    const len = nums.length

    for (let i = 0; i < len; i++) {
        const idx = Math.abs(nums[i]) - 1

        if (nums[idx] > 0) {
            nums[idx] = -nums[idx]
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            res.push(i + 1)
        }
    }

    return res
};
```