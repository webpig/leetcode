## 快乐数

题目链接：[202. 快乐数](https://leetcode-cn.com/problems/happy-number/)

### 哈希表

```js
var isHappy = function(n) {
  const set = new Set()

  while (n !== 1 && !set.has(n)) {
    set.add(n)
    n = getSum(n)
  }

  return n === 1
};

function getSum(n) {
  let sum = 0

  while (n > 0) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }

  return sum
}
```

### 快慢指针

```js
var isHappy = function(n) {
  let slow = n
  let fast = getSum(n)

  while (fast !== 1 && fast !== slow) {
    fast = getSum(getSum(fast))
    slow = getSum(slow)
  }

  return fast === 1
};

function getSum(n) {
  let sum = 0

  while (n > 0) {
    sum += (n % 10) ** 2
    n = Math.floor(n / 10)
  }

  return sum
}
```
