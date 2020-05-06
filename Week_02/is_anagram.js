/**
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
*/

const index = function(a, b) {
  if ((!a && a !==0) || (!b && b !== 0)) {
    return false;
  }
  const sorted_a = a.split('').sort().join('');
  const sorted_b = b.split('').sort().join('');
  return sorted_a === sorted_b;
}

const a = 'anagram';
const b = 'nagaram';
const result = index(a, b);
console.log(`${result}`);