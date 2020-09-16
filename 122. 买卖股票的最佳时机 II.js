/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let maxProfit = 0

	for (let i = 1; i < prices.length; i++) {
		const profit = prices[i] - prices[i - 1]

		if (profit > 0) {
			maxProfit += profit
		}
	}

	return maxProfit
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	const len = prices.length

	if (len < 2) {
		return 0
	}

	const dp = Array.from(new Array(len), () => new Array(2).fill(0))

	dp[0][0] = 0
	dp[0][1] = -prices[0]

	for (let i = 1; i < len; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
	}

	return dp[len - 1][0]
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	const len = prices.length

	if (len < 2) {
		return 0
	}

	const hold = []
	const notHold = []

	hold[0] = -prices[0]
	notHold[0] = 0

	for (let i = 1; i < len; i++) {
		notHold[i] = Math.max(notHold[i - 1], hold[i - 1] + prices[i])
		hold[i] = Math.max(hold[i - 1], notHold[i - 1] - prices[i])
	}

	return notHold[len - 1]
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	const len = prices.length

	if (len < 2) {
		return 0
	}

	let notHold = 0
	let hold = -prices[0]
	let prevNotHold = notHold
	let prevHold = hold

	for (let i = 1; i < len; i++) {
		notHold = Math.max(prevNotHold, prevHold + prices[i])
		hold = Math.max(prevHold, prevNotHold - prices[i])

		prevNotHold = notHold
		prevHold = hold
	}

	return notHold
};