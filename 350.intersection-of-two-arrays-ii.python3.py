#
# [350] Intersection of Two Arrays II
#
# https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
#
# algorithms
# Easy (34.56%)
# Total Accepted:    15.4K
# Total Submissions: 44.3K
# Testcase Example:  '[1,2,2,1]\n[2,2]'
#
# 给定两个数组，编写一个函数来计算它们的交集。
#
# 示例 1:
#
# 输入: nums1 = [1,2,2,1], nums2 = [2,2]
# 输出: [2,2]
#
#
# 示例 2:
#
# 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# 输出: [4,9]
#
# 说明：
#
#
# 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
# 我们可以不考虑输出结果的顺序。
#
#
# 进阶:
#
#
# 如果给定的数组已经排好序呢？你将如何优化你的算法？
# 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
# 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
#
#
#


class Solution:
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        # if len(nums2) > len(nums1):
        #     list1 = [i for i in nums2 if i in nums1]
        # else:
        #     list1 = [i for i in nums1 if i in nums2]
        # list2 = list(set(list1))
        # res = list1.union(list2) #这里总是提示没有union这个属性 = = ，我不知道错在哪里，只能换种方法了
        # return res

        # 这道题目的重点是理解次数这个问题，由于我前面理解错了，所以出现了上面错误的解答 o.o

        res = []
        for i in nums1:
            if i in nums2:
                res.append(i)
                nums2.remove(i)  # 这类删除操作，保证了次数的问题
        return res


# test = Solution()
# print(test.intersect([4, 9, 5, 8], [9, 4, 9, 8, 4]))
