## 子集 II

题目链接：[90. 子集 II](https://leetcode-cn.com/problems/subsets-ii/)

排序去重

```js
var subsetsWithDup = function(nums) {
    const res = []

    nums.sort((a, b) => a - b)

    const dfs = (path, start) => {
        res.push(path)

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue

            dfs([...path, nums[i]], i + 1)
        }
    }

    dfs([], 0)

    return res
};
```