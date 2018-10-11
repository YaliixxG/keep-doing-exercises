#
# [303] Range Sum Query - Immutable
#
# https://leetcode-cn.com/problems/range-sum-query-immutable/description/
#
# algorithms
# Easy (46.02%)
# Total Accepted:    3.6K
# Total Submissions: 7.7K
# Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
#
# 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
#
# 示例：
#
# 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
#
# sumRange(0, 2) -> 1
# sumRange(2, 5) -> -1
# sumRange(0, 5) -> -3
#
# 说明:
#
#
# 你可以假设数组不可变。
# 会多次调用 sumRange 方法。
#
#
#


class NumArray:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.nums = nums

    def sumRange(self, i, j):
        """
        :type i: int
        :type j: int
        :rtype: int
        """
        return sum(self.nums[i:j+1])


p1 = NumArray([-2, 0, 3, -5, 2, -1])
print(p1.sumRange(0, 3))


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)


# js方法：
# 但是我最后一组测试数据没有过，超出时间限制了 = =
# var NumArray = function(nums) {
#   this.nums = nums
#   this.sumRange()
# }

# NumArray.prototype.sumRange = function(i, j) {
#   let sumI = 0,
#     sumJ = 0
#   for (let k = 0; k < this.nums.length; k++) {
#     if (k < i) sumI += this.nums[k]
#     if (k <= j) sumJ += this.nums[k]
#   }
#   return sumJ - sumI
# }

# let num1 = new NumArray([-2, 0, 3, -5, 2, -1])
