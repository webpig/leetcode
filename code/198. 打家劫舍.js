/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	const n = nums.length

	if (n === 0) {
		return 0
	}

	const dp = []
	dp[0] = nums[0]
	dp[1] = Math.max(nums[0], nums[1])

	for (let i = 2; i < n; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
	}

	return dp[n - 1]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	const n = nums.length

	if (n === 0) {
		return 0
	}

	if (n === 1) {
		return nums[0]
	}

	let curr = 0
	let pre = 0

	for (let i = 0; i < n; i++) {
		const temp = curr
		curr = Math.max(curr, pre + nums[i])
		pre = temp
	}

	return curr
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	return nums.reduce((prev, curr) => [prev[1], Math.max(prev[0] + curr, prev[1])], [0, 0])[1]
};