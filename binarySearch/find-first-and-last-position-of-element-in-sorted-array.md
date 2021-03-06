## 在排序数组中查找元素的第一个和最后一个位置

题目链接：[34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### 两次二分查找

第一次查找到第一个位置：如果当前元素大于等于`target`，则将`r`设置为`mid - 1`，否则将`l`设置为`mid + 1`；因为是要找到第一个`target`，所以每次将右边界调到小于或等于`target`处。

第二次查找最后一个位置：如果当前元素小于等于`target`，则将`l`设置为`mid + 1`，否则将`r`设置为`mid - 1`；因为是要找到最后一个`target`，所以每次将左边界调到大于或等于`target`处。

```js
var searchRange = function(nums, target) {
    let l = 0, r = nums.length - 1

    while (l <= r) {
        const mid = l + ((r - l) >> 1)

        if (nums[mid] >= target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    if (nums[l] !== target) return [-1, -1]
    
    const start = l
    r = nums.length - 1

    while (l <= r) {
        const mid = l + ((r - l) >> 1)
        
        if (nums[mid] <= target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    
    return [start, r]
};
```