/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
	const res = []

	const dfs = (path, start) => {
		if (path.length === k) {
			res.push([...path])
			return
		}

		for (let i = start; i <= n; i++) {
			path.push(i)
			dfs(path, i + 1)
			path.pop()
		}
	}

	dfs([], 1)

	return res
};