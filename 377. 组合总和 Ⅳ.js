/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
	let dp = Array(target + 1).fill(0)
	dp[0] = 1

	for (let i = 1; i <= target; i++) {
		for (const num of nums) {
			if (num <= i) {
				dp[i] += dp[i - num]
			}
		}
	}

	return dp[target]
};
