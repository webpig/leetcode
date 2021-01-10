## 前 K 个高频元素

题目链接：[347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)

### 堆

建立小顶堆，节省空间

```js
var topKFrequent = function(nums, k) {
    const map = new Map()

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    const heap = new Heap((a, b) => map.get(a) - map.get(b))

    for (const num of new Set(nums)) {
        if (heap.data.length < k) {
            heap.add(num)
        } else if (map.get(num) > map.get(heap.data[0])) {
            heap.extractTop()
            heap.add(num)
        }
    }

    return heap.data
};

class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn
        this.data = []
    }

    add(element) {
        this.data.push(element)
        let i = this.data.length - 1

        while (this.parent(i) >= 0 && this.compareFn(element, this.data[this.parent(i)]) < 0) {
            this.data[i] = this.data[this.parent(i)]
            i = this.parent(i)
        }

        this.data[i] = element
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    extractTop() {
        if (this.data.length <= 1) {
            return this.data.pop()
        }

        const top = this.data[0]
        this.data[0] = this.data.pop()
        const len = this.data.length
        const curr = this.data[0]
        let i = 0

        while (i < len) {
            let leftIndex = 2 * i + 1, rightIndex = 2 * i + 2
            let swap = null, leftChild = null, rightChild = null

            if (leftIndex < len) {
                leftChild = this.data[leftIndex]
                if (this.compareFn(leftChild, curr) < 0) {
                    swap = leftIndex
                }
            }

            if (rightIndex < len) {
                rightChild = this.data[rightIndex]
                if (
                    (swap === null && this.compareFn(rightChild, curr) < 0) ||
                    (swap !== null && this.compareFn(rightChild, leftChild) < 0)
                ) {
                    swap = rightIndex
                }
            }

            if (swap === null) break

            this.data[i] = this.data[swap]
            i = swap
        }

        this.data[i] = curr

        return top
    }
}
```

### 快速排序

```js
var topKFrequent = function(nums, k) {
    const map = new Map()

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }

    nums = [...new Set(nums)]
    quickSort(map, nums, 0, nums.length - 1, k)

    return nums.slice(0, k)
};

function quickSort(map, nums, start, end, k) {
    if (start >= end) return

    const pivot = partition(map, nums, start, end)

    if (pivot === k - 1) return

    quickSort(map, nums, start, pivot - 1, k)
    quickSort(map, nums, pivot + 1, end, k)
}

function partition(map, nums, start, end) {
    let j = start

    for (let i = start; i < end; i++) {
        if (map.get(nums[i]) > map.get(nums[end])) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++
        }
    }

    [nums[j], nums[end]] = [nums[end], nums[j]]

    return j
}
```
