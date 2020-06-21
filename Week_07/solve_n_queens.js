var solveNQueens = function (n) {
  let result = [];
  backStart(0, [], n, result);
  return result;
};
function backStart(k, arr, n, result) {
  if (k >= n) {
      let ar = [];
      arr.forEach(e => {//讲我们要的数据转换为需要的格式
          let str = '..............................';
          str=str.substring(0,n);
          str = `${str.substring(0, e)}Q${str.substring(e + 1)}`
          ar.push(str);
      })
      result.push(ar);
  } else {
      for (let i = 0; i < n; i++) {
          arr[k] = i;
          if (isBack(k, arr)) {
              backStart(k + 1, arr, n, result)
          }
      }
  }
}
function isBack(k, arr) {
  for (let i = 0; i < k; i++) {
      if (k - i == Math.abs(arr[i] - arr[k]) || arr[k] == arr[i]) {
          return false;
      }
  }
  return true;
}