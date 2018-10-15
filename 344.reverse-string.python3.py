#
# [344] Reverse String
#
# https://leetcode-cn.com/problems/reverse-string/description/
#
# algorithms
# Easy (62.89%)
# Total Accepted:    20.5K
# Total Submissions: 32.7K
# Testcase Example:  '"hello"'
#
# 编写一个函数，其作用是将输入的字符串反转过来。
#
# 示例 1:
#
# 输入: "hello"
# 输出: "olleh"
#
#
# 示例 2:
#
# 输入: "A man, a plan, a canal: Panama"
# 输出: "amanaP :lanac a ,nalp a ,nam A"
#
#


class Solution:
    def reverseString(self, s):
        """
        :type s: str
        :rtype: str
        """
        return s[::-1]


# test = Solution()
# print(test.reverseString('hello'))
