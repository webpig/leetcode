// 哈希表
var majorityElement = function(nums) {
	let map = new Map()

	for (const num of nums) {
		if (map.has(num)) {
			map.set(num, map.get(num) + 1)
		} else {
			map.set(num, 1)
		}
	}

	for (const [key, value] of map) {
		if (value > Math.floor(nums.length / 2)) {
			return key
		}
	}
};

// 排序
var majorityElement = function(nums) {
	nums.sort((a, b) => a - b)
	return nums[Math.floor(nums.length / 2)]
};