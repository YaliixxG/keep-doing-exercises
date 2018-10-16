#
# [349] Intersection of Two Arrays
#
# https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
#
# algorithms
# Easy (52.94%)
# Total Accepted:    6.2K
# Total Submissions: 11.5K
# Testcase Example:  '[1,2,2,1]\n[2,2]'
#
# 给定两个数组，编写一个函数来计算它们的交集。
#
# 示例 1:
#
# 输入: nums1 = [1,2,2,1], nums2 = [2,2]
# 输出: [2]
#
#
# 示例 2:
#
# 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# 输出: [9,4]
#
# 说明:
#
#
# 输出结果中的每个元素一定是唯一的。
# 我们可以不考虑输出结果的顺序。
#
#
#


class Solution:
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        set1 = set(nums1)  # 用set先筛选自己内部重复的数据
        set2 = set(nums2)
        return list(set1 & set2)  # 用 & 来求两个set之间的交集，在用list将交集转化成序列[]形式


# test = Solution()
# print(test.intersection([4, 9, 5], [9, 4, 9, 8, 4]))
