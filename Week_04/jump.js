/**给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
*/

var jump = function (nums) {
  let farthestPos = 0 
  let endOfCanReach = 0 
  let steps = 0 
  for (let i = 0; i < nums.length - 1; i++) {
    farthestPos = Math.max(farthestPos, i + nums[i])
    if (i === endOfCanReach) { 
      endOfCanReach = farthestPos
      steps++
    }
    if (endOfCanReach >= nums.length - 1) { // 一旦新的可抵达区间已经包含了nums数组的末尾，则直接break退出循环，不用对区间的点进行遍历了
      break
    }
  }
  return steps
};