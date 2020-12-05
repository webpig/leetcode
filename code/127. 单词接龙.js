/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
	const dict = new Set(wordList)
	if (!dict.has(endWord)) {
		return 0
	}
	let steps = 1
	let queue = [beginWord]

	while (queue.length > 0) {
		const next = []

		for (const word of queue) {
			if (word === endWord) {
				return steps
			}

			for (let i = 0; i < word.length; i++) {
				for (let j = 0; j < 26; j++) {
					const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1)

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

	return 0
};
