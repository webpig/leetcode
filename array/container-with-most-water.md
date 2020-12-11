## 盛最多水的容器

题目链接：[11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)

思路：双指针，l从左边界开始，r从右边界开始；如果 `height[l] < height[r]` 则 `l++` ; 否则 `r--` 。
因为保持短边的话，宽度减少，那么容量会更小。而我们保持长边，让短边那一块能增大，那么容量可能会更大。代码如下：

```js
var maxArea = function(height) {
    let max = 0
    let l = 0, r = height.length - 1

    while (l < r) {
        // 较小高度 * 宽度
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l))

        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }

    return max
};
```
