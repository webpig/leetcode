##  区间列表的交集

题目链接：[986. 区间列表的交集](https://leetcode-cn.com/problems/interval-list-intersections/)

### 双指针

区间主要就是取两者的左边界较大值和右边界较小值，如果左边较大值不大于右边较小值，则该两值组成一个区间；接下来使用双指针来确定下一个需要比较的区间对。根据两者的右边界值判断，较小的向右移动。

```js
var intervalIntersection = function(firstList, secondList) {
    const res = []
    let i = 0, j = 0
    
    while (i < firstList.length && j < secondList.length) {
        const low = Math.max(firstList[i][0], secondList[j][0])
        const high = Math.min(firstList[i][1], secondList[j][1])

        if (low <= high) {
            res.push([low, high])
        }

        if (firstList[i][1] < secondList[j][1]) {
            i++
        } else {
            j++
        }
    }

    return res
};
```