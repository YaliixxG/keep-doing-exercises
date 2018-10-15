/*
 * [326] Power of Three
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (39.32%)
 * Total Accepted:    7.4K
 * Total Submissions: 18.7K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 27
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: 9
 * 输出: true
 * 
 * 示例 4:
 * 
 * 输入: 45
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  while (n > 0) {
    if (n % 3 == 0) {
      n = n / 3
    } else {
      break
    }
  }
  return n == 1
}

// python3解题方法：

// class Solution(object):
//     def isPowerOfThree(self, n):
//         """
//         :type n: int
//         :rtype: bool
//         """
//         while n>0:
//             if n%3==0:
//                 n/=3
//             else:
//                 break
//         return True if n==1 else False
