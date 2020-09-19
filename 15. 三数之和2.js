/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	const res = []

	nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			break
		}

		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}

		let j = i + 1
		let k = nums.length - 1

		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k]

			if (sum === 0) {
				res.push([nums[i], nums[j], nums[k]])

				while (j < k && nums[j] === nums[j + 1]) {
					j++
				}

				while (j < k && nums[k] === nums[k - 1]) {
					k--
				}

				j++
				k--
				continue
			}

			if (sum < 0) {
				j++
				continue
			}

			if (sum > 0) {
				k--
				continue
			}
		}
	}

	return res
};