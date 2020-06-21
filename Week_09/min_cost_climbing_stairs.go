func minCostClimbingStairs(cost []int) int {
	var i int
	if len(cost) == 0 {
			return 0
	}
	if len(cost) == 1{
			return cost[0]
	}
	for i = len(cost) - 3 ; i >= 0; i-- {
			cost[i] += min(cost[i + 1],cost[i + 2])
	}
	return min(cost[1] , cost[0])
}
func min(a, b int) int{
	if a > b {
			return b
	}else{
			return a
	}
}
