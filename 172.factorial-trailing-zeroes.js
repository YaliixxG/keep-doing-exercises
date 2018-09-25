/*
 * [172] Factorial Trailing Zeroes
 *
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/description/
 *
 * algorithms
 * Easy (34.53%)
 * Total Accepted:    3.5K
 * Total Submissions: 10.3K
 * Testcase Example:  '3'
 *
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  if (n / 5 < 5) {
    return Math.floor(n / 5)
  } else {
    return Math.floor(n / 5) + trailingZeroes(n / 5)
  }
}

// 此题由于有时间复杂度的原因，所以不能用递归求出值再算个数的方法。
// 当出现0的时候，一定是有5*2出现。出现的个数是由参数能分解成几个5来决定的，如果有两个5，则是两个0。
// 但是比如传入30这个数，按道理计算得来是6，但是最后得出的答案是7，是因为这个阶乘中，还有25*4这种情况
// 的出现，所以还要考虑这种情况。25*4会得出两个0，是因为25还可以分解成5*5，也就是两个5。
// 所以，30/5 = 6，6还可以分解出一个5来。
