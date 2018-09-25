/*
 * [169] Majority Element
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.76%)
 * Total Accepted:    7.6K
 * Total Submissions: 14.6K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let m = 1,
    res = 0,
    n = nums.length / 2
  nums.sort((a, b) => {
    return a - b
  })
  if (nums.length == 1) return nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      m++
      if (m > n) {
        res = nums[i]
        m = 1
      }
    }
  }
  return res
}
