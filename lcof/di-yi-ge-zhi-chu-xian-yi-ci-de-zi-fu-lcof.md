## 剑指 Offer 50. 第一个只出现一次的字符

题目链接：[剑指 Offer 50. 第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

使用哈希表记录每个字符出现的次数，然后遍历查找第一个只出现一次的字符。

```js
var firstUniqChar = function(s) {
    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return s[i]
        }
    }

    return ' '
};
```

因为题目说了都为小数字母，我们可以使用一个size为26的数组来存储字符出现次数；对于此类问题，我们都可以使用这种方式。

```js
var firstUniqChar = function(s) {
    const counter = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        counter[getIndex(s[i])]++
    }

    for (let i = 0; i < s.length; i++) {
        if (counter[getIndex(s[i])] === 1) {
            return s[i]
        }
    }

    return ' '
};

function getIndex(s) {
    return s.charCodeAt() - 'a'.charCodeAt()
}
```
