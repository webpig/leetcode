## 剑指 Offer 03. 数组中重复的数字

题目链接：[剑指 Offer 03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

### 哈希表

```js
var findRepeatNumber = function(nums) {
  const map = new Map()

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  for (const [num, count] of map.entries()) {
    if (count > 1) {
      return num
    }
  }

  return -1
};
```

因为数字在 0～n-1 范围内，所以如果有重复的数字，则相同下标位置会有冲突；我们遍历数组，将数字移到对应下标处，如果在移动的过程中发现该下标处已经有相同的数字了，则是找到结果了。

```js
var findRepeatNumber = function(nums) {
  let i = 0

  while (i < nums.length) {
    let curr = nums[i]

    while (curr !== i) {
      if (nums[curr] === curr) {
        return curr
      } else {
        [nums[curr], curr] = [curr, nums[curr]]
      }
    }

    i++
  }

  return -1
};
```
