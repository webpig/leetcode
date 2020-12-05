/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
	const obstacle = {}
	// 结果
	let max = 0
	// 方向
	let direction = 0
	// 当前坐标
	let x = 0
	let y = 0
	const dx = [0, 1, 0, -1]
	const dy = [1, 0, -1, 0]

	for (let i = 0; i < obstacles.length; i++) {
		obstacle[obstacles[i]] = true
	}

	for (const command of commands) {
		if (command === -1) {
			direction = (direction + 1) % 4
		} else if (command === -2) {
			direction = (direction + 3) % 4
		} else {
			for (let i = 0; i < command; i++) {
				const nextX = x + dx[direction]
				const nextY = y + dy[direction]

				if (obstacle[`${nextX},${nextY}`]) {
					break
				} else {
					x = nextX
					y = nextY
				}
			}
		}

		max = Math.max(max, x**2 + y**2)
	}

	return max
};