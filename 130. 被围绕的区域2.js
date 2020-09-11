/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	const m = board.length
	if (m === 0) {
		return
	}
	const n = board[0].length

	const dfs = (board, i, j) => {
		if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') {
			return
		}

		board[i][j] = 'A'

		dfs(board, i + 1, j)
		dfs(board, i - 1, j)
		dfs(board, i, j + 1)
		dfs(board, i, j - 1)
	}

	for (let i = 0; i < m; i++) {
		dfs(board, i, 0)
		dfs(board, i, n - 1)
	}

	for (let i = 0; i < n; i++) {
		dfs(board, 0, i)
		dfs(board, m - 1, i)
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'A') {
				board[i][j] = 'O'
			} else if (board[i][j] === 'O') {
				board[i][j] = 'X'
			}
		}
	}
};

// BFS
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	const m = board.length
	if (m === 0) {
		return
	}
	const n = board[0].length
	const dx = [1, -1, 0, 0]
	const dy = [0, 0, 1, -1]
	const queue = []

	for (let i = 0; i < m; i++) {
		if (board[i][0] === 'O') {
			queue.push([i, 0])
		}
		if (board[i][n - 1] === 'O') {
			queue.push([i, n - 1])
		}
	}

	for (let j = 1; j < n - 1; j++) {
		if (board[0][j] === 'O') {
			queue.push([0, j])
		}
		if (board[m - 1][j] === 'O') {
			queue.push([m - 1, j])
		}
	}

	while (queue.length > 0) {
		const cell = queue.shift()
		let x = cell[0]
		let y = cell[1]
		board[x][y] = 'A'

		for (let i = 0; i < 4; i++) {
			let mx = x + dx[i]
			let my = y + dy[i]

			if (mx < 0 || my < 0 || mx >= m || my >= n || board[mx][my] !== 'O') {
				continue
			}
			queue.push([mx, my])
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'A') {
				board[i][j] = 'O'
			} else if (board[i][j] === 'O') {
				board[i][j] = 'X'
			}
		}
	}
};