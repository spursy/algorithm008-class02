package main;
import "fmt"

func maximalSquare(matrix [][]byte) int {
  dp := make([][]int, len(matrix))
  maxSide := 0

  for i := 0; i < len(matrix); i++ {
		dp[i] = make([]int, len(matrix[i]))
      for j := 0; j < len(matrix[i]); j++ {
					if i == 0 || j == 0 {
						dp[i][j] =  int(matrix[i][j] - '0')
					} else if int(matrix[i][j] - '0') == 1 {
							dp[i][j] = min(min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1
              if dp[i][j] > maxSide {
                  maxSide = dp[i][j]
              }
					}
					
      }
  }
  return maxSide * maxSide
}

func min(x, y int) int {
  if x < y {
      return x
  }
  return y
}

func main() {
	var origin = [][] byte {
		{ '1', '0', '1', '0', '0' },
		{ '1', '0', '1', '1', '1' },
		{ '1', '1', '1', '1', '1' },
		{ '1', '0', '0', '1', '0' },
	}
	var result = maximalSquare(origin)
	fmt.Println(result)
}