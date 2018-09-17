/*
 * [70] Climbing Stairs
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (40.73%)
 * Total Accepted:    13.7K
 * Total Submissions: 33.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let arr = [1, 2]
  if (n == 1) return arr[0]
  if (n == 2) return arr[1]

  for (let i = 3; i < n + 1; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  }
  return arr[arr.length - 1]
}
