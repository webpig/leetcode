/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let pre = nums[0]
	let max = nums[0]

	for (let i = 1; i < nums.length; i++) {
		pre = Math.max(pre + nums[i], nums[i])
		max = Math.max(pre, max)
	}

	return max
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let sum = 0
	let max = 0

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