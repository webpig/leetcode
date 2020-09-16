/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	const helper = (nums) => {
		let pre = 0
		let curr = 0

		for (const num of nums) {
			const temp = curr
			curr = Math.max(pre + num, curr)
			pre = temp
		}

		return curr
	}

	if (nums.length === 0) return 0
	if (nums.length === 1) return nums[0]

	return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)))
};