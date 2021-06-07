## 三角形的最大周长

题目链接：[976. 三角形的最大周长](https://leetcode-cn.com/problems/largest-perimeter-triangle/)

排序，从后开始遍历，只要找出符合三角形的条件即可。

```js
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);

    for (let i = nums.length - 1; i >= 2; i--) {
        if (nums[i - 2] + nums[i - 1] > nums[i]) {
            return nums[i] + nums[i - 1] + nums[i - 2];
        }
    }

    return 0;
};
```