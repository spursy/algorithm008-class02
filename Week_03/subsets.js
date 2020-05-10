/**给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。
*/

'use strict';

var subsets = function(nums) {
  let n = nums.length;
  let tmpPath = [];
  let res = [];
  let backtrack = (tmpPath,start) => {
     res.push(tmpPath);
     for(let i = start;i < n;i++){
         tmpPath.push(nums[i]);
         backtrack(tmpPath.slice(),i+1);
         tmpPath.pop();
     } 
  }
  backtrack(tmpPath,0);
  return res;
};

const nums = [1,2,3];
const result = subsets(nums);
console.log(`${result}`);
