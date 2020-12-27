## 四数之和

题目链接：[四数之和](https://leetcode-cn.com/problems/4sum/)


### 排序+双指针

```js
var fourSum = function(nums, target) {
    const res = []
    const len = nums.length

    nums.sort((a, b) => a - b)

    for (let a = 0; a < len - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue

        for (let b = a + 1; b < len - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue

            let c = b + 1, d = len - 1

            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d]

                if (sum === target) {
                    res.push([nums[a], nums[b], nums[c], nums[d]])

                    while (c < d && nums[c] === nums[c + 1]) c++
                    while (c < d && nums[d] === nums[d - 1]) d--

                    c++
                    d--
                } else if (sum < target) {
                    c++
                } else {
                    d--
                }
            }
        }
    }

    return res
};
```
