/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices.length === 0) {
		return 0
	}

	const len = prices.length
	const dp = Array.from(new Array(len), () => Array.form(new Array(3), () => new Array(2).fill(0)))

	dp[0][1][0] = 0
	dp[0][1][1] = -prices[0]
	dp[0][2][0] = 0
	dp[0][2][1] = -prices[0]

	for (let i = 1; i < len; i++) {
		dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i])
		dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i])
		dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
		dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
	}

	return dp[len - 1][2][0]
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices.length === 0) {
		return 0
	}

	const len = prices.length

	let profitOne0 = 0
	let profitOne1 = -prices[0]
	let profitTwo0 = 0
	let profitTwo1 = -prices[0]

	for (let i = 1; i < len; i++) {
		profitTwo0 = Math.max(profitTwo0, profitTwo1 + prices[i])
		profitTwo1 = Math.max(profitTwo1, profitOne0 - prices[i])
		profitOne0 = Math.max(profitOne0, profitOne1 + prices[i])
		profitOne1 = Math.max(profitOne1, -prices[i])
	}

	return profitTwo0
};