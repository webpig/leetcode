/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	const queue = []
	const visited = new Set()
	let count = 0

	queue.push(amount)

	while (queue.length > 0) {
		const n = queue.length
		for (let i = 0; i < n; i++) {
			const temp = queue.shift()

			if (temp === 0) {
				return count
			}

			for (const coin of coins) {
				const next = temp - coin
				if (next >= 0 && !visited.has(next)) {
					queue.push(next)
					visited.add(next)
				}
			}
		}

		count++
	}

	return -1
};