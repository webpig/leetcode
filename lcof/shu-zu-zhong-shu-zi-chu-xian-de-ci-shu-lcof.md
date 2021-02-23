## 剑指 Offer 56 - I. 数组中数字出现的次数

题目链接：[剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

```js
var singleNumbers = function(nums) {
    let xor = 0

    // 求出所有数的异或结果，因为其他数字出现次数都是2次，所有该结果为两个不同数字的异或结果
    for (const num of nums) {
        xor ^= num
    }

    // 得到最低位的1，因为两个数字不同，那么他们的异或结果肯定有一位存在不同，那么找到那个为1的位，然后将数组分为两组
    const mask = xor & (-xor)
    const ans = new Array(2).fill(0)

    // 根据与mask的&操作结果分为两组，如果该位不为1，则为0；根据该位是否为1分组
    for (const num of nums) {
        if ((num & mask) === 0) {
            ans[0] ^= num
        } else {
            ans[1] ^= num
        }
    }

    return ans
};
```