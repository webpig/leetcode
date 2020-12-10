## 移动零

题目链接：[283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

思路：双指针，i用于遍历数组，j用于标记非零元素和0的分界点。即j之前都是非零元素，j之后都是0。


两次循环，第一次循环将所有非零元素移动到前面，第二次循环将0补上

```js
var moveZeroes = function(nums) {
    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }

    for (let i = j; i < nums.length; i++) {
        nums[i] = 0
    }
};
```

一次循环，遇到非零元素直接交换，每次都将非零元素交换到前面了

```js
var moveZeroes = function(nums) {
    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
};
```

一次循环，遇到非零元素直接赋值给下标j对应位置，即将非零元素移动到前面了；然后判断i是否大于j，是则补0。写起来都差不多，主要是双指针技巧。

```js
var moveZeroes = function(nums) {
    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]

            if (i > j) {
                nums[i] = 0
            }

            j++
        }
    }
};
```
