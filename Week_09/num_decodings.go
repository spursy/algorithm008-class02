func numDecodings(s string) int {
	sum := 0
	dfs(&sum,s)
	return sum
}

func dfs(n *int,s string){
	if len(s) == 0 {
			*n ++
			return 
	}
	if (s[0]-'0') == 0{
			return 
	}
	dfs(n,s[1:])
	if len(s) > 1{
			m := (s[0]-'0') * 10 + (s[1] - '0')
			if m >= 1 && m <= 26{
					dfs(n,s[2:])
			}       
	}
}