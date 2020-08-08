// 递归解法
const generateParenthesis = function(n) {
  let ans = []

  // left：已经存在的左括号个数，right：已经存在的右括号个数，n：括号对数，str：当前字符串
  const generate = (left, right, n, str) => {
    if (left === n && right === n) {
      ans.push(str)
      return
    }

    // 只要左括号个数小于n就可以继续添加左括号
    if (left < n) generate(left + 1, right, n, str + '(')
    // 左括号个数大于右括号个数才可以添加右括号
    if (left > right) generate(left, right + 1, n, str + ')')
  }

  generate(0, 0, n, '')

  return ans
}