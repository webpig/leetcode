/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	const res = []

	const dfs = (path, target, start) => {
		if (target === 0 && path.length === k) {
			res.push([...path])
			return
		}

		for (let i = start; i <= 9; i++) {
			path.push(i)
			dfs(path, target - i, i + 1)
			path.pop()
		}
	}

	dfs([], n, 1)

	return res
};