## 排序数组

题目链接：[912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

### 冒泡排序

相邻元素两两比较，如果前者比后者大则将两元素进行交换，这样每次将最大的元素排到了最后，这里做了一个优化，也就是如果数组已经排好序了直接返回。

```js
var sortArray = function(nums) {
  const len = nums.length

  // 需要排序的次数，看元素的个数
  for (let i = 0; i < len - 1; i++) {
    // 表示是否有交换操作
    let swapped = false

    // 遍历未排序的元素组，进行排序操作
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        swapped = true
      }
    }

    // 如果没有交换操作，直接退出循环
    if (!swapped) break
  }

  return nums
};
```

### 选择排序

每次在未排序的元素组中找到最小值，将其放在未排序的头部，然后进行下次排序。

```js
var sortArray = function(nums) {
  const len = nums.length

  for (let i = 0; i < len - 1; i++) {
    // 记录最小值的索引
    let minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
    }
  }

  return nums
};
```

### 插入排序

插入排序和我们平时玩扑克时理牌情景有点像，我们每次拿到新牌，会和手上的牌进行比较，将它插入到正确的位置；这里我们用 `i` 遍历所有的元素，然后用 `j` 来记录需要插入的位置。

```js
var sortArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    const currValue = nums[i]
    let j = i - 1

    while (j >= 0 && nums[j] > currValue) {
      nums[j + 1] = nums[j]
      j--
    }

    nums[j + 1] = currValue
  }

  return nums
};
```

### 堆排序

需要先构建小顶堆，然后每次取出顶部数据

```js
var sortArray = function(nums) {
  const heap = new Heap()

  for (const num of nums) {
    heap.add(num)
  }

  let i = 0
  while (!heap.isEmpty()) {
    nums[i++] = heap.extractTop()
  }

  return nums
};

class Heap {
  constructor(compare) {
    this.compare = compare || ((a, b) => a - b)
    this.data = []
  }

  isEmpty() {
    return this.data.length === 0
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2)
  }

  add(element) {
    this.data.push(element)
    let i = this.data.length - 1
    let parentIndex = this.getParentIndex(i)

    while (parentIndex >= 0 && this.compare(element, this.data[parentIndex]) < 0) {
      this.data[i] = this.data[parentIndex]
      i = parentIndex
      parentIndex = this.getParentIndex(i)
    }

    this.data[i] = element
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
      const leftChildIndex = 2 * i + 1, rightChildIndex = 2 * i + 2
      let leftChild = null, rightChild = null
      let swap = null

      if (leftChildIndex < len) {
        leftChild = this.data[leftChildIndex]

        if (this.compare(leftChild, curr) < 0) {
          swap = leftChildIndex
        }
      }

      if (rightChild < len) {
        rightChild = this.data[rightChildIndex]

        if (
          (swap && this.compare(rightChild, leftChild) < 0) ||
          (!swap && this.compare(rightChild, curr) < 0)
        ) {
          swap = rightChildIndex
        }
      }

      if (!swap) break

      this.data[i] = this.data[swap]
      i = swap
    }

    this.data[i] = curr
    return top
  }
}
```

### 归并排序

归并排序用到分治的思想，我们每次将数组分为两半，直到数组元素为1个，这也是递归终止条件。然后我们又将数组两两合并，最终合成排序数组。

```js
var sortArray = function(nums) {
  return mergeSort(nums)
};

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  const leftSortedArr = mergeSort(leftArr)
  const rightSortedArr = mergeSort(rightArr)

  return merge(leftSortedArr, rightSortedArr)
}

function merge(leftArr, rightArr) {
  let sortedArr = []
  let i = 0, j = 0

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      sortedArr.push(leftArr[i++])
    } else {
      sortedArr.push(rightArr[j++])
    }
  }

  if (i < leftArr.length) sortedArr = sortedArr.concat(leftArr.slice(i))
  if (j < rightArr.length) sortedArr = sortedArr.concat(rightArr.slice(j))

  return sortedArr
}
```

### 快速排序

快速排序的思想是随机找到一个元素，然后遍历数组，将小于该元素的分为一组，大于该元素的分为另外一组。对新的分组继续重复该操作，即递归操作，直到数组元素为1，那么就是排好序的了。

```js
var sortArray = function(nums) {
  return quickSort(nums)
};

function quickSort(arr) {
  if (arr.length <= 1) return arr

  const mid = arr.pop()
  const leftArr = []
  const rightArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }

  const leftSortedArr = quickSort(leftArr)
  const rightSortedArr = quickSort(rightArr)

  return [...leftSortedArr, mid, ...rightSortedArr]
}

// 原地快速排序，不需要额外空间
var sortArray = function(nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums
};

function quickSort(arr, left, right) {
  if (left >= right) return

  const pivot = partition(arr, left, right)

  quickSort(arr, left, pivot - 1)
  quickSort(arr, pivot + 1, right)
}

function partition(arr, left, right) {
  let pivot = left

  for (let i = left; i < right; i++) {
    if (arr[i] < arr[right]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]]
      pivot++
    }
  }

  [arr[pivot], arr[right]] = [arr[right], arr[pivot]]

  return pivot
}
```
