'use strict';

var minPathSum = function(grid) {
  if (grid.length === 0) return 0;
  const dp = [];
  const rows = grid.length;
  const columns = grid[0].length;

  for (let i = 1; i < rows + 1; i ++) {
    dp[i] = [];
    for(let j = 1; j < columns + 1; j ++) {
      if (i === 1 && j === 1) dp[i][j] = grid[i - 1][j - 1];
      else if (i === 1 && j > 1) dp[i][j] = grid[i - 1][j - 1] + dp[i][j - 1]
      else if (i > 1 && j ===1)  dp[i][j] = grid[i - 1][j - 1] + dp[i-1][j]
      else {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
      }
    }
  }

  return dp[rows][columns];
};

const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
];

const result = minPathSum(grid);
console.log(`${result}`);
