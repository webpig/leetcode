/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let maxProfit = 0

	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			maxProfit = Math.max(maxProfit, prices[j] - prices[i])
		}
	}

	return maxProfit
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let maxProfit = 0
	let minProfit = prices[0]

	for (let i = 1; i < prices.length; i++) {
		minProfit = Math.min(minProfit, prices[i])
		maxProfit = Math.max(maxProfit, prices[i] - minProfit)
	}

	return maxProfit
};