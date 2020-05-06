/**给定一个二叉树，返回它的中序 遍历。

示例:
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
 */

const index = function() {
  var result = [];
  function pushRoot(root){
      if(root != null){
          if(root.left != null){
              pushRoot(root.left);
          }
          result.push(root.val);
          if(root.right !=null){
              pushRoot(root.right);
          }
      }
  }
  pushRoot(root);
  return result;
}

const result = index();
console.log(`${result}`);