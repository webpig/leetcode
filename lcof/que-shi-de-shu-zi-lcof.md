## 剑指 Offer 53 - II. 0～n-1中缺失的数字

题目链接：[剑指 Offer 53 - II. 0～n-1中缺失的数字](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)

### 二分查找

一般有序情况，我们可以考虑二分查找；这里通过判断值是否和索引相等来确定区间。

```js
var missingNumber = function(nums) {
    let l = 0, r = nums.length - 1

    while (l < r) {
        const mid = l + ((r - l) >> 1)

        if (nums[mid] === mid) {
            l = mid + 1
        } else {
            r = mid
        }
    }

    return l === nums[l] ? l + 1 : l
};
```