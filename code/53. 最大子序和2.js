/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let sum = 0
	let max = -Infinity

	for (const num of nums) {
		if (sum > 0) {
			sum += num
		} else {
			sum = num
		}

		max = Math.max(sum, max)
	}

	return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let dp = []
	let max = nums[0]
	dp[0] = nums[0]

	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
		max = Math.max(max, dp[i])
	}

	return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let pre = nums[0]
	let max = nums[0]

	for (let i = 1; i < nums.length; i++) {
		pre = Math.max(pre + nums[i], nums[i])
		max = Math.max(max, pre)
	}

	return max
};