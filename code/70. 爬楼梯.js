/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	const dp = []
	dp[0] = 1
	dp[1] = 1

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}

	return dp[n]
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	let prepre = 1
	let pre = 1

	for (let i = 2; i <= n; i++) {
		const curr = prepre + pre
		prepre = pre
		pre = curr
	}

	return pre
};