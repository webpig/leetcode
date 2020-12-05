/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const stack = []

	for (const c of s) {
		if (c === '(') {
			stack.push(')')
		} else if (c === '[') {
			stack.push(']')
		} else if (c === '{') {
			stack.push('}')
		} else if (stack.pop() !== c) {
			return false
		}
	}

	return stack.length === 0
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	const map = { '(': ')', '[': ']', '{': '}'}
	const stack = []

	for (const c of s) {
		if (map[c]) {
			stack.push(map[c])
		} else if (stack.pop() !== c) {
			return false
		}
	}

	return stack.length === 0
};

isValid('[]')