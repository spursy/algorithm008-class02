var minCostClimbingStairs = function(cost) {
  cost.push(0);
  let n = cost.length;
  let dp = [];
  dp[0] = cost[0]; 
  dp[1] = cost[1]; 
  for(let i = 2;i < n;i++){
      dp[i] = Math.min(dp[i-2] , dp[i-1]) + cost[i];
  }
  return dp[n-1];
};