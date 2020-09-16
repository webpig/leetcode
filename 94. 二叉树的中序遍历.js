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
var inorderTraversal = function(root) {
	const res = []

	const dfs = (root) => {
		if (root) {
			dfs(root.left)
			res.push(root.val)
			dfs(root.right)
		}
	}

	dfs(root)

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
var inorderTraversal = function(root) {
	const res = []
	const stack = []

	while (stack.length > 0 || root) {
		while (root) {
			stack.push(root)
			root = root.left
		}

		root = stack.pop()
		res.push(root.val)
		root = root.right
	}

	return res
};