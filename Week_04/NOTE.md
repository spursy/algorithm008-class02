学习笔记

## 深度优先搜索与广度优先搜索

**深度优先搜索示例代码**

```javascript
const visited = new map();
function def(node) {
  if (visited.has(node)) return;

  visited.set(node, node);
  def(node.left);
  def(node.right);
}
```

**广度优先搜索示例代码**

```javascript
function def(node) {
  const ret = [];
  if (!root) return ret;

  const q = [];
  q.push(root);
  while(q.length !== 0) {
    ret.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
}
```

## 贪心算法

- 每一步选择中都采取当前状态下的最好或最优（即最有利的选择），从而导致全局最好或最优
- 贪心与动态规划的区别在于对每一步的子问题做出选择且不能回退，动态规划则会保存以前的运算结果，并根据以前的结果对当前进行选择，且可以回退
- 问题可分解成子问题，子问题的最优解可递推成最终问题的最优解
  
## 二分查找

**二分查找的前提条件**

- 目标函数单调性
- 存在上下界
- 能够通过索引访问
  
**代码模板**

```javascript
const left, right = 0, arr.length;
while left < right {
  const mid = (left + right)/2;
  if (arr[mid] === target) {
    return;
  } else if (arr[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
```

