## 去除重复字母

题目链接：[316. 去除重复字母](https://leetcode-cn.com/problems/remove-duplicate-letters/)

关于重复，我们可以使用哈希表来处理；保证字典序最小，我们需要和之前的元素进行比较，确定应该删除哪些重复元素。适合与已经添加的元素进行比较的数据结构，
那就是栈了。它可以从后往前依次比较。方便处理。

总结：哈希表判断重复，栈保存已添加的元素

比如'bcabc'，b直接添加到stack，因为此时stack为空，没有添加过元素；然后c也是直接添加到stack中；因为c比b大；到了a的时候，此时发现b和c都重复了，而且比a都大，那么就要把b和c从stack中剔除；后面b和c照常添加。

代码如下：

```js
var removeDuplicateLetters = function(s) {
    const stack = []
    const map = new Map()
    const set = new Set()

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            while (stack.length > 0 && stack[stack.length - 1] > s[i] && map.get(stack[stack.length - 1]) > i) {
                set.delete(stack.pop())
            }
            stack.push(s[i])
            set.add(s[i])
        }
    }

    return stack.join('')
};
```
