/*
 * [136] Single Number
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (52.61%)
 * Total Accepted:    20.8K
 * Total Submissions: 39.6K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //  此方法不适用于元素量巨大的数组
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] == nums[j]) {
  //         nums.splice(i, 1)
  //         nums.splice(j - 1, 1)
  //         i--
  //         j--
  //       }
  //     }
  //   }
  //   return nums[0]

  nums.sort((a, b) => {
    return a - b
  })
  if (nums[0] !== nums[1]) return nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i]
  }
}
