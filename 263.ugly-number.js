/*
 * [263] Ugly Number
 *
 * https://leetcode-cn.com/problems/ugly-number/description/
 *
 * algorithms
 * Easy (41.28%)
 * Total Accepted:    2.9K
 * Total Submissions: 7.1K
 * Testcase Example:  '6'
 *
 * 编写一个程序判断给定的数是否为丑数。
 * 
 * 丑数就是只包含质因数 2, 3, 5 的正整数。
 * 
 * 示例 1:
 * 
 * 输入: 6
 * 输出: true
 * 解释: 6 = 2 × 3
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: true
 * 解释: 8 = 2 × 2 × 2
 * 
 * 
 * 示例 3:
 * 
 * 输入: 14
 * 输出: false 
 * 解释: 14 不是丑数，因为它包含了另外一个质因数 7。
 * 
 * 说明：
 * 
 * 
 * 1 是丑数。
 * 输入不会超过 32 位有符号整数的范围: [−231,  231 − 1]。
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
//============开始自己想的太复杂了，准备先判断奇偶数的，再无限除以 2 或者 3,5
// // 判断奇数偶数
// const isOJ = num => {
//   if (num % 2 == 0) {
//     return isO(num)
//   } else {
//     return isJ(num)
//   }
// }

// // 如果是偶数时
// const isO = num => {
//   while (num % 2 == 0) {
//     num = num / 2
//     if (num == 1 || num == 3 || num == 5) return true
//   }
//   isJ(num)
// }

// // 如果是奇数时
// const isJ = num => {
//   while (num % 3 == 0 || num % 5 == 0) {
//     if (num % 3 == 0) {
//       num = num / 3
//     } else {
//       num = num / 5
//     }
//     if (num == 1 || num == 3 || num == 5) return true
//   }
//   return false
// }

var isUgly = function(num) {
  if (num <= 0) return false
  if (num == 1) return true
  while (num >= 2 && num % 2 == 0) num /= 2
  while (num >= 3 && num % 3 == 0) num /= 3
  while (num >= 5 && num % 5 == 0) num /= 5

  return num == 1
}

isUgly(14)
