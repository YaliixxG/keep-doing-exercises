/*
 * [219] Contains Duplicate II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (27.87%)
 * Total Accepted:    3.9K
 * Total Submissions: 13.9K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {},
    item
    for (let i = 0; i < nums.length; i++) {
        item = nums[i]
        if(obj[item]!= undefined && i - obj[item]<=k){ //判断是否是重复的值，并且是否满足差值小于等于k的条件
            return true
        }
        obj[item] = i //把值和索引值存进这个对象里面
        
    }
    return false
};
