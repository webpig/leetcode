// DFS：递归，根节点的最大深度 = max(左子树最大深度，右子树最大深度) + 1
const maxDepth = function(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// BFS
const maxDepth = function(root) {
  let ans = 0
  let queue = []

  if (root) queue.push(root)

  while (queue.length > 0) {
    let len = queue.length

    while (len > 0) {
      const curr = queue.shift()

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)

      len--
    }

    ans++
  }

  return ans
}