/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
	return s.replace(/ /g, '%20')
};

var replaceSpace = function(s) {
	let res = ''

	for (const char of s) {
		if (char === ' ') {
			res += '%20'
		} else {
			res += char
		}
	}

	return res
};