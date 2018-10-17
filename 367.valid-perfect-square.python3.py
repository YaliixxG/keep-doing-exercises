#
# [367] Valid Perfect Square
#
# https://leetcode-cn.com/problems/valid-perfect-square/description/
#
# algorithms
# Easy (37.89%)
# Total Accepted:    3.2K
# Total Submissions: 8.6K
# Testcase Example:  '16'
#
# 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
#
# 说明：不要使用任何内置的库函数，如  sqrt。
#
# 示例 1：
#
# 输入：16
# 输出：True
#
# 示例 2：
#
# 输入：14
# 输出：False
#
#
#

class Solution:
    def isPerfectSquare(self, num):
        """
        :type num: int
        :rtype: bool
        """
        i = 1            
        while num > 0:
            num -= i
            i += 2
        return num == 0


# test = Solution()
# print(test.isPerfectSquare(81))

# 列出平方数的和，可以找到规律，他们的差值都是递增的奇数和
