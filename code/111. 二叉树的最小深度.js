// 如果树为空，返回0
// 如果遇到叶子节点，返回1
// 如果左子树或右子树有一个为空，最小深度为不为空的子树的最小深度
// 如果左右子树都不为空，最小深度为两者之间的较小值
// 最后返回深度需要加上根节点：+1
const minDepth = function(root) { 
  if (!root) return 0
  if (!root.left && !root.right) return 1

  let minLeft = minDepth(root.left)
  let minRight = minDepth(root.right)

  if (!root.left || !root.right) return minLeft + minRight + 1

  return Math.min(minLeft, minRight) + 1
}

// BFS
// 将每层所有节点入队，然后出队，每次循环处理的都是每层所有节点，遇到叶子节点直接返回
const minDepth = function(root) { 
  let ans = 0
  let queue = []

  if (root) queue.push(root)

  while (queue.length > 0) {
    let len = queue.length

    while (len > 0) {
      const curr = queue.shift()

      if (!curr.left && !curr.right) return ans + 1
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)

      len--
    }

    ans++
  }

  return ans
}