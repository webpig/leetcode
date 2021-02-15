## 删除排序数组中的重复项 II

题目链接：[80. 删除排序数组中的重复项 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)

`i` 遍历数组，`count` 用于统计数字出现次数，`j` 用于记录新数组长度，同时也用于添加元素。
```js
var removeDuplicates = function(nums) {
    let count = 1, j = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++
        } else {
            count = 1
        }

        if (count <= 2) {
            nums[j++] = nums[i]
        }
    }

    return j
};
```

如果索引小于2，直接加到新数组中；索引大于2的时候则判断当前数是否比索引为 `i - 2` 的数大，大则表示重复不为2以上。最后返回 `i` 即可。

```js
var removeDuplicates = function(nums) {
    let i = 0

    for (const num of nums) {
        if (i < 2 || num > nums[i - 2]) {
            nums[i++] = num
        }
    }

    return i
};
```