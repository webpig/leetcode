## 员工的重要性

题目链接：[690. 员工的重要性](https://leetcode-cn.com/problems/employee-importance/)

### DFS

```js
// 用哈希表存储id->员工信息信息的映射，然后用DFS查找所有的下属
var GetImportance = function(employees, id) {
    const map = new Map()
    let res = 0

    for (const employee of employees) {
        map.set(employee.id, employee)
    }

    const dfs = (id) => {
        const employee = map.get(id)
        res += employee.importance

        for (const id of employee.subordinates) {
            dfs(id)
        }
    }

    dfs(id)

    return res
};
```

### BFS

```js
var GetImportance = function(employees, id) {
    const map = new Map()
    let res = 0
    const queue = [id]

    for (const employee of employees) {
        map.set(employee.id, employee)
    }

    while (queue.length > 0) {
        const size = queue.length

        for (let i = 0; i < size; i++) {
            const employee = map.get(queue.shift())
            res += employee.importance

            for (const id of employee.subordinates) {
                queue.push(id)
            }
        }
    }

    return res
};
```
