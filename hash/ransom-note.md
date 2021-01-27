## 赎金信

题目链接：[383. 赎金信](https://leetcode-cn.com/problems/ransom-note/)

### 哈希表

统计字符出现次数，如果 magazine 的字符够 ransomNote 使用，结果就为true，否则为false

```js
var canConstruct = function(ransomNote, magazine) {
  const map = new Map()

  for (const char of ransomNote) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  for (const char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1)
    }
  }

  for (const count of map.values()) {
    if (count > 0) return false
  }

  return true
};
```

### 数组作为哈希表

因为题目说了只有小写字母，所以我们可以用一个长度为26的数组来存储字符出现次数。

```js
var canConstruct = function(ransomNote, magazine) {
  const counter = new Array(26).fill(0)

  for (const char of magazine) {
    counter[getIndex(char)]++
  }

  for (const char of ransomNote) {
    counter[getIndex(char)]--

    if (counter[getIndex(char)] < 0) {
      return false
    }
  }

  return true
};

function getIndex(char) {
  return char.charCodeAt() - 97
}
```
