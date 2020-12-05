/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	const m = matrix.length
	if (m === 0) {
		return false
	}
	const n = matrix[0].length

	let l = 0, r = m * n - 1

	while (l <= r) {
		const mid = l + Math.floor((r - l) / 2)
		const val = matrix[Math.floor(mid / n)][mid % n]

		if (val === target) {
			return true
		} else if (val < target) {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}

	return false
};