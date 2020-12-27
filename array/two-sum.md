## 两数之和

题目链接：[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

### 哈希表

```js
var twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (map.has(diff)) {
            return [map.get(diff), i]
        }

        map.set(nums[i], i)
    }

    return -1
};
```
