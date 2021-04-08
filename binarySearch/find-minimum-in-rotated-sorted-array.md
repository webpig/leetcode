## 寻找旋转排序数组中的最小值

题目链接：[153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

### 二分查找

该数组本身是升序排列的，经过n次旋转后可能无序了，但是我们可以发现旋转后的数组总有一部分是有序的，只是中间可能无序；这样我们就可以用二分查找来做这道题了。
我们可以比较 `nums[mid]` 和 `nums[r]` 的值，然后确定是丢弃左区间还是右区间。如果 `nums[mid] < nums[r]` ，则说明右侧是有序的，那么最小值只可能在左区间或者为mid，
如果 `nums[mid] > nums[r]` ，则说明左侧是有序的，最小值在右侧。根据这两个情况收缩空间即可。

```js
var findMin = function(nums) {
    let l = 0, r = nums.length - 1

    while (l < r) {
        const mid = l + ((r - l) >> 1)

        if (nums[mid] < nums[r]) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return nums[l]
};
```