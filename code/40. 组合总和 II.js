/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	const res = []

	candidates.sort((a, b) => a - b)

	const dfs = (path, target, start) => {
		if (target === 0) {
			res.push([...path])
			return
		}

		for (let i = start; i < candidates.length; i++) {
			if (target - candidates[i] < 0) {
				break
			}

			if (i > start && candidates[i] === candidates[i - 1]) {
				continue
			}

			path.push(candidates[i])
			dfs(path, target - candidates[i], i + 1)
			path.pop()
		}
	}

	dfs([], target, 0)

	return res
};