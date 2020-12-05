/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
	const queue = []
	const res = []

	if (root) queue.push(root)

	while (queue.length > 0) {
		const len = queue.length
		let sum = 0

		for (let i = 0; i < len; i++) {
			const curr = queue.shift()
			sum += curr.val

			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}

		res.push(sum / len)
	}

	return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
	const sum = []
	const count = []

	const dfs = (node, i) => {
		if (sum[i] === undefined) sum[i] = 0
		if (count[i] === undefined) count[i] = 0

		sum[i] += node.val
		count[i]++

		if (node.left) dfs(node.left, i + 1)
		if (node.right) dfs(node.right, i + 1)
	}

	dfs(root, 0)

	for (let i = 0; i < sum.length; i++) {
		sum[i] = sum[i] / count[i]
	}

	return sum
};