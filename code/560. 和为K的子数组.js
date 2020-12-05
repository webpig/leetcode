/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	let count = 0
	let prefixSum = 0
	const map = new Map()
	map.set(0, 1)

	for (const num of nums) {
		prefixSum += num

		if (map.has(prefixSum - k)) {
			count += map.get(prefixSum - k)
		}

		if (map.has(prefixSum)) {
			map.set(prefixSum, map.get(prefixSum) + 1)
		} else {
			map.set(prefixSum, 1)
		}
	}

	return count
};
