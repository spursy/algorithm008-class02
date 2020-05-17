/**
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
 */

var canJump = function(nums) {
  let max = 0; 

  for(let i = 0; i < nums.length; i++) {
      if (max < i) return false; 
      max = Math.max(nums[i] + i, max);
  }

  return max >= nums.length - 1
}
