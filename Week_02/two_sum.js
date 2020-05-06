/**  
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

const index = function(nums, target) {
  if (!nums || nums.length === 0) {
    return [];
  }
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    const difference = target - item;
    if (m.has(difference)) {
      return [m.get(2), i];
    } else {
      m.set(item, i);
    }
  }
  return [];
}

const nums = [ 2, 7, 11, 15 ];
const target = 9;

const result = index(nums, target);
console.log(`${result}`);