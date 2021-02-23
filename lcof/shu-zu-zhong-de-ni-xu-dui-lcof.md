## 剑指 Offer 51. 数组中的逆序对

题目链接：[剑指 Offer 51. 数组中的逆序对](https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/)

这题可以使用归并排序，因为在归并排序中会涉及到合并操作，而合并的是两个有序的数组，比较过程中，有两个元素进行比较，如果左边数组的元素比右边的数组元素大，则说明左边剩下的元素和右边该元素都是一组逆序对，直接累加即可，直到最后都为有序。

```js
var reversePairs = function(nums) {
    const len = nums.length

    if (len < 2) return 0

    const cloned = [...nums]

    return countPairs(cloned, 0, len - 1)
};

function countPairs(nums, left, right) {
    if (left >= right) return 0

    const mid = left + Math.floor((right - left) / 2)

    const leftPairs = countPairs(nums, left, mid)
    const rightPairs = countPairs(nums, mid + 1, right)

    return leftPairs + rightPairs + mergeAndCount(nums, left, mid, right)
}

function mergeAndCount(nums, left, mid, right) {
    let count = 0
    const temp = new Array(right - left + 1)
    let i = left, j = mid + 1, k = 0

    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            temp[k++] = nums[i++]
        } else {
            temp[k++] = nums[j++]
            count += mid - i + 1
        }
    }

    while (i <= mid) {
        temp[k++] = nums[i++]
    }

    while (j <= right) {
        temp[k++] = nums[j++]
    }

    for (let i = left; i <= right; i++) {
        nums[i] = temp[i - left]
    }

    return count
}
```