## 用栈实现队列

题目链接：[232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)

使用两个栈，`inStack` 负责添加元素，`outStack` 负责弹出或者输出元素。

```js
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack = []
    this.outStack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.clearInStack()
    return this.outStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.clearInStack()
    return this.outStack[this.outStack.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0
};

MyQueue.prototype.clearInStack = function() {
    if (!this.outStack.length) {
        while(this.inStack.length) this.outStack.push(this.inStack.pop())
    }
}
```