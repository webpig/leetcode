## 三数之和

题目链接：[15. 三数之和](https://leetcode-cn.com/problems/3sum/)

### 排序+双指针

```js
var threeSum = function(nums) {
    const res = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1, k = nums.length - 1

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])

                while (j < k && nums[j] === nums[j + 1]) j++
                while (j < k && nums[k] === nums[k + 1]) k--

                j++
                k--
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }
    }

    return res
};
```
