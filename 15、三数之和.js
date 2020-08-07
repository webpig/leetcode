// 使用双指针
const threeSum = function(nums) {
  const res = []

  // 长度小于3，直接返回空数组
  if (nums.length < 3) {
    return []
  }

  // 排序，方便处理重复
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    // 如果元素大于0，则说明之后的元素都大于0，结果不可能为0
    if (nums[i] > 0) {
      break
    }

    // 遇到重复元素，直接跳过此次循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // 使用双指针
    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]])

        // 处理后两位数的重复情况
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--

        j++
        k--
        continue
      }

      // 如果结果小于0，则j需要向后移，找到更大的值
      if (sum < 0) {
        j++
        continue
      }

      // 如果结果大于0，则k需要向前移，找到更小的值
      if (sum > 0) {
        k--
        continue
      }
    }
  }

  return res
};