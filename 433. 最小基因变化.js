/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
	const dict = new Set(bank)
	if (!dict.has(end)) {
		return -1
	}
	const strs = ['A', 'C', 'G', 'T']
	let queue = [start]
	let steps = 0

	while (queue.length > 0) {
		const next = []

		for (const w of queue) {
			if (w === end) {
				return steps
			}

			for (let i = 0; i < w.length; i++) {
				for (let j = 0; j < strs.length; j++) {
					const newWord = w.slice(0, i) + strs[j] + w.slice(i + 1)

					if (dict.has(newWord)) {
						next.push(newWord)
						dict.delete(newWord)
					}
				}
			}
		}

		queue = next
		steps++
	}

	return -1
};