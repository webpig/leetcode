/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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

			path.push(candidates[i])
			dfs(path, target - candidates[i], i)
			path.pop()
		}
	}

	dfs([], target, 0)

	return res
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	const res = []

	const dfs = (path, target, index) => {
		if (index === candidates.length) {
			return
		}

		if (target === 0) {
			res.push(path)
			return
		}

		dfs(path, target, index + 1)

		if (target - candidates[index] >= 0) {
			dfs([...path, candidates[index]], target - candidates[index], index)
		}
	}

	dfs([], target, 0)

	return res
};