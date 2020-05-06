/**给定一个二叉树，返回它的 前序 遍历。

 示例:
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 
输出: [1,2,3]
 */

var preorderTraversal = function(root) {
  let res = [];
  if(!root){
      return res;
  }
  let stack = [[root,false]];
  while(stack.length > 0){
      let node = stack.pop();
      let curr = node[0];
      let isTrue = node[1];
      if(isTrue){
          res.push(curr.val);
      }else{
          if(curr.right){
              stack.push([curr.right,false]);
          }
          if(curr.left){
              stack.push([curr.left,false]);
          }
          stack.push([curr,true]);
      }
  }
  return res;
};