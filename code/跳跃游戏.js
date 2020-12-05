/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let end = 0
	let maxPosition = 0
	let steps = 0

	for (let i = 0; i < nums.length - 1; i++) {
		console.log(maxPosition, i, end)

		maxPosition = Math.max(maxPosition, i + nums[i])

		if (i === end) {
			end = maxPosition
			steps++
		}

	}

	return steps
};

console.log(jump([2,3,1,1,4]))