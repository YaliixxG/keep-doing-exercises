/*
 * [67] Add Binary
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (42.39%)
 * Total Accepted:    6.5K
 * Total Submissions: 15.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let lenA = a.length - 1,
    lenB = b.length - 1,
    add = 0, //进位
    res = ""
  while (lenA >= 0 || lenB >= 0) {
    let strA, strB, temp
    strA = a[lenA] ? a[lenA] : 0
    strB = b[lenB] ? b[lenB] : 0
    temp = +strA + +strB + add
    res = (temp % 2) + res
    add = temp > 1 ? 1 : 0
    lenA--
    lenB--
  }
  if (add == 1) {
    res = "1" + res
  }
  return res
}
