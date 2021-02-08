## 最接近的三数之和

题目链接：[16. 最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/)

和 K-Sum 之和思路一样

### 排序+双指针

```js
var threeSumClosest = function(nums, target) {
  let res = 0
  let minDiff = Infinity
  const len = nums.length

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let j = i + 1, k = len - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      if (sum === target) {
        return sum
      } else if (sum > target) {
        k--
      } else {
        j++
      }

      const diff = Math.abs(sum - target)

      if (diff < minDiff) {
        res = sum
        minDiff = diff
      }
    }
  }

  return res
};
```
