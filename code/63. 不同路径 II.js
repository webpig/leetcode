/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	const m = obstacleGrid.length
	const n = obstacleGrid[0].length
	const dp = Array.from(new Array(m), () => new Array(n).fill(0))

	for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
		dp[i][0] = 1
	}

	for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
		dp[0][i] = 1
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (obstacleGrid[i][j] === 1) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
			}
		}
	}

	return dp[m - 1][n - 1]
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	const m = obstacleGrid.length
	const n = obstacleGrid[0].length
	const dp = new Array(n).fill(0)

	dp[0] = obstacleGrid[0][0] === 1 ? 0 : 1

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (obstacleGrid[i][j] === 1) {
				dp[j] = 0
				continue
			}

			if (j > 0) {
				dp[j] += dp[j - 1]
			}
		}
	}

	return dp[n - 1]
};