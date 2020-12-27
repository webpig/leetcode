## K数之和

k数之和统一解法：

```js
const kSum = (nums, target, k, path, res) => {
    if (k === 2) {
        twoSum(nums, target, path, res)
        return res
    } else {
        for (let i = 0; i <= nums.length - k; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            kSum(nums.slice(i + 1), target - nums[i], k - 1, [...path, nums[i]], res)
        }
    }

    return res
}

function twoSum(nums, target, path, res) {
    let l = 0, r = nums.length - 1

    while (l < r) {
        const sum = nums[l] + nums[r]

        if (sum === target) {
            res.push([...path, nums[l], nums[r]])

            while (l < r && nums[l] === nums[l + 1]) l++
            while (l < r && nums[r] === nums[r - 1]) r--

            l++
            r--
        } else if (sum < target) {
            l++
        } else {
            r--
        }
    }

    return res
}
```

示例：四数之和

```js
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    return kSum(nums, target, 4, [], [])
};
```
