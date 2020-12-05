/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	let max = -Infinity, imax = 1, imin = 1

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 0) {
			[imax, imin] = [imin, imax]
		}

		imin = Math.min(imin * nums[i], nums[i])
		imax = Math.max(imax * nums[i], nums[i])

		max = Math.max(max, imax)
	}

	return max
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	let max = -Infinity
	let currMin = 1
	let currMax = 1

	for (let i = 0; i < nums.length; i++) {
		const prevMax = currMax
		currMax = Math.max(prevMax * nums[i], nums[i], currMin * nums[i])
		currMin = Math.min(prevMax * nums[i], nums[i], currMin * nums[i])

		max = Math.max(max, currMax)
	}

	return max
};