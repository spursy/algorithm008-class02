学习笔记

### 递归、回溯 和 分治

- 人肉的方式低效、很累
- 找到最近最简方法，将其拆解成可重复解决的问题 (寻找 重复性)
- 数据归纳法的思维
  
### 动态规划模板

```
function DP() {
  const dp = [M][N];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j ++) {
      dp[i][j] = _Function(dp[i'][j']);
    }
  }
}
```

- 动态规划 和 （递归、分治）没有根本上的区别 （关键看有无最优子结构）
- 共性：找到重复子问题
- 差异性：最优子结构、中途可以淘汰次优解


### 几种经典例题

- 爬楼梯问题： f(n) = f(n-1) + f(n-2), f(1) = 1, f(0) = 0
- 不同路径： f(x, y) = f(x-1, y) + f(x, y-1)
- 打家劫舍 
- 最小路径： 
    dp[i][j] 状态的定义是 minPath(A[1->i][1->j])
    dp[i][j] = min(dp[i-1][j], dp[i][j - 1]) + A[i][j]
- 股票买卖



### 高级DP（动态规划）

- 状态拥有更多的维度 （二维、三维甚至更多）
- 状态方程更加复杂

