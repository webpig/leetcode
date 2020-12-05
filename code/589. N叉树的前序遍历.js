/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
	const res = []

	const dfs = (root) => {
		if (!root) {
			return
		}

		res.push(root.val)
		for (const child of root.children) {
			dfs(child)
		}
	}

	dfs(root)

	return res
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
	const res = []
	const stack = []

	if (root) {
		stack.push(root)
	}

	while (stack.length > 0) {
		let size = stack.length

		while (size--) {
			const node = stack.pop()

			res.push(node.val)

			for (let i = node.children.length - 1; i >= 0; i--) {
				stack.push(node.children[i])
			}
		}
	}

	return res
};