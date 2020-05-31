学习笔记

## 递归模板

```
public void recut(int level, int param) {
  // terminator
  if (level > MAX_LEVEL) {
    // process result
    return;
  }

  // process current logic
  process(level, param);

  recur(level: level + 1, newParam);
}
```

## 分治

```
def divide_conquer(problem, param1, param2, ...):
  # recursion terminator
  if problem is None:
    print_result
    return
  
  # prepare data
  data = prepare_data(problem)
  subProblems = split_problem(problem, data)

  # conquer subproblems
  subresult1 = self.divide_conquer(subProblems[0], p1, ...)
  subresult2 = self.divide_conquer(subProblems[1], p1, ...)
  subresult3 = self.divide_conquer(subProblems[2], p1, ...)

  # process and genarate the final result
  result = process_result(subresult1, subresult2, subresult3, ......)
```

## 总结

- 人头递归低效
- 找到最近最简方法，将其拆解成可重复解决的问题
- 数学归纳法思维

## 动态规划

- 分治 + 最优子结构

## 动态规划 VS 递归 VS 分治

- 动态规划和递归或者分治没有根本区别（关键看有无最优子结构）
- 找到重复子问题（共性）
- 最优子结构、中途可以淘汰的次优解（差异性）











