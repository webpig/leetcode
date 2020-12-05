/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let max = -Infinity

	for (let i = 0; i < nums.length; i++) {
		let sum = 0
		for (let j = i; j < nums.length; j++) {
			sum += nums[j]
			max = Math.max(max, sum)
		}
	}

	return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let pre = 0, max = nums[0]

	nums.forEach(num => {
		pre = Math.max(pre + num, num)
		max = Math.max(max, pre)
	})

	return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let max = -Infinity
	let sum = 0

	for (const num of nums) {
		if (sum > 0) {
			sum += num
		} else {
			sum = num
		}

		max = Math.max(max, sum)
	}

	return max
};