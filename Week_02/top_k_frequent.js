/**给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]
 */

const index = function(nums, k) {
  const m = new Map();
  for (let index = 0; index < nums.length; index++) {
    let repetitionCount = m.get(nums[index]) || 0;
    m.set(nums[index], (++ repetitionCount));
  }
  const sortArr = [...m.entries()].sort((a, b) => b[1] - a[1]);
  return sortArr.slice(0,k).map(item => item[0]);
}

const nums = [1,1,1,2,2,3];
const k = 2;
const result = index(nums, k);
console.log(`${result}`);
