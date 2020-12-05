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

	let i = m - 1, j = 0

	while (i >= 0 && j < n) {
		if (matrix[i][j] === target) {
			return true
		} else if (matrix[i][j] < target) {
			j++
		} else {
			i--
		}
	}

	return false
};