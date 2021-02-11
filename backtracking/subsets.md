## 子集

题目链接：[78. 子集](https://leetcode-cn.com/problems/subsets/)

```js
var subsets = function(nums) {
    const res = []

    const dfs = (path, index) => {
        if (index === nums.length) {
            res.push([...path])
            return
        }

        // 不选择该值
        dfs(path, index + 1)
        // 选择该值
        path.push(nums[index])
        dfs(path, index + 1)
        path.pop()
    }

    dfs([], 0)

    return res
};
```

```js
var subsets = function(nums) {
    const res = []

    const dfs = (path, start) => {
        res.push([...path])

        for (let i = start; i < nums.length; i++) {
            dfs([...path, nums[i]], i + 1)
        }
    }

    dfs([], 0)

    return res
};
```