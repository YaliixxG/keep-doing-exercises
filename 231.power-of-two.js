/*
 * [231] Power of Two
 *
 * https://leetcode-cn.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (40.64%)
 * Total Accepted:    4.9K
 * Total Submissions: 12.1K
 * Testcase Example:  '1'
 *
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: true
 * 解释: 20 = 1
 * 
 * 示例 2:
 * 
 * 输入: 16
 * 输出: true
 * 解释: 24 = 16
 * 
 * 示例 3:
 * 
 * 输入: 218
 * 输出: false
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let m = n / 2
  if (n <= 0) return false
  if (n == 1 || n == 2 || m == 1) return true

  while (m % 2 == 0) {
      m = m / 2
      if (m == 1) {
          return true
      }
  }
  return false
}
