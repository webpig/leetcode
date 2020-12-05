// 迭代解法
const tribonacci = function(n) {
  if (n < 3) return n === 0 ? 0 : 1

  let x = 0
  let y = 1
  let z = 1
  let temp = x + y + z

  for (let i = 3; i <= n; i++) {
    temp = x + y + z
    x = y
    y = z
    z = temp
  }

  return temp
}

// 递归解法
const map = new Map()

const tribonacci = function(n) {
  if (n < 3) return n === 0 ? 0 : 1

  if (map.has(n)) return map.get(n)

  let curr = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
  map.set(n, curr)

  return curr
}