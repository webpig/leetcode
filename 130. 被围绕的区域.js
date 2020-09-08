/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// dfs
var solve = function(board) {
	let m = board.length
	if (m === 0) {
		return
	}
	let n = board[0].length

	for (let i = 0; i < m; i++) {
		dfs(board, m, n, i, 0)
		dfs(board, m, n, i, n - 1)
	}

	for (let i = 1; i < n - 1; i++) {
		dfs(board, m, n, 0, i)
		dfs(board, m, n, m - 1, i)
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

function dfs (board, m, n, i, j) {
	if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') {
		return
	}

	board[i][j] = 'A'

	dfs(board, m, n, i + 1, j)
	dfs(board, m, n, i - 1, j)
	dfs(board, m, n, i, j + 1)
	dfs(board, m, n, i, j - 1)
}

// bfs
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	const dx = [1, -1, 0, 0]
	const dy = [0, 0, 1, -1]

	const m = board.length
	if (m === 0) {
		return
	}
	const n = board[0].length
	const queue = []

	for (let i = 0; i < m; i++) {
		if (board[i][0] === 'O') {
			queue.push([i, 0])
		}
		if (board[i][n - 1] === 'O') {
			queue.push([i, n - 1])
		}
	}

	for (let i = 1; i < n - 1; i++) {
		if (board[0][i] === 'O') {
			queue.push([0, i])
		}
		if (board[m - 1][i] === 'O') {
			queue.push([m - 1, i])
		}
	}

	while (queue.length > 0) {
		const cell = queue.shift()
		let x = cell[0]
		let y = cell[1]
		board[x][y] = 'A'
		for (let i = 0; i < 4; i++) {
			let mx = x + dx[i], my = y + dy[i]
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