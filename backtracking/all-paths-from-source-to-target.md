## 所有可能的路径

题目链接：[797. 所有可能的路径](https://leetcode-cn.com/problems/all-paths-from-source-to-target/)

path 记录路径，index 为路径上的点

```js
var allPathsSourceTarget = function(graph) {
  const res = []

  const dfs = (path, index) => {
    if (index === graph.length - 1) {
      res.push([...path, index])
      return
    }

    for (let i = 0; i < graph[index].length; i++) {
      path.push(index)
      dfs(path, graph[index][i])
      path.pop()
    }
  }

  dfs([], 0)

  return res
};
```
