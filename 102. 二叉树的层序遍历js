const levelOrder = function(root) {
  let queue = []
  let ans = []

  if (root) queue.push(root)

  while (queue.length > 0) {
    let len = queue.length
    const level = []

    while (len > 0) {
      const curr = queue.shift()

      level.push(curr.val)

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)

      len--
    }

    ans.push(level)
  }

  return ans
}