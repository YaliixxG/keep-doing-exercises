#
# [415] Add Strings
#
# https://leetcode-cn.com/problems/add-strings/description/
#
# algorithms
# Easy (40.08%)
# Total Accepted:    2.5K
# Total Submissions: 6.2K
# Testcase Example:  '"0"\n"0"'
#
# 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
#
# 注意：
#
#
# num1 和num2 的长度都小于 5100.
# num1 和num2 都只包含数字 0-9.
# num1 和num2 都不包含任何前导零。
# 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
#
#
#


class Solution:
    def addStrings(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        return str(eval(num1 + '+' + num2))


# test = Solution()
# print(test.addStrings('9333852702227987', '85731737104263'))
