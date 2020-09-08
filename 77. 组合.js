/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	const res = []

	const dfs = (level, n, k, path) => {
		if (path.length + (n - level + 1) < k) {
			return
		}

		if (path.length === k) {
			res.push(path)
			return
		}

		dfs(level + 1, n, k, [...path, level])
		dfs(level + 1, n, k, path)
	}

	dfs(1, n, k, [])

	return res
};