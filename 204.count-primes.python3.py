#
# [204] Count Primes
#
# https://leetcode-cn.com/problems/count-primes/description/
#
# algorithms
# Easy (22.90%)
# Total Accepted:    6.6K
# Total Submissions: 28.8K
# Testcase Example:  '10'
#
# 统计所有小于非负整数 n 的质数的数量。
#
# 示例:
#
# 输入: 10
# 输出: 4
# 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
#
#
#


class Solution:
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        # 前面用JS写的，全部都超过了时间限制 = = ，现在这个是厄拉多塞筛法
        # 具体操作：先将 2~n 的各个数放入表中，然后在2的上面画一个圆圈，然后划去2的其他倍数；
        # 第一个既未画圈又没有被划去的数是3，将它画圈，再划去3的其他倍数；现在既未画圈又没有被划去的第一个数是5，将它画圈，并划去5的其他倍数……依次类推
        # ，一直到所有小于或等于n的各数都画了圈或划去为止。这时，表中画了圈的以及未划去的那些数正好就是小于 n 的素数。

        if n < 3:  # 因为是小于N的质数，所以小于3的数量是为0的
            return 0
        prime = [1]*n  # 建立一个长度为N的以1填充的数组
        prime[0] = prime[1] = 0
        # 从起始值2开始循环至N的平方根的数为止，步长为1，为什么是循环至平方根呢，因为两者乘积若大于N则不符合条件了，也没必要划去了
        for i in range(2, int(n**0.5) + 1):
            if prime[i] == 1:
                #起始值为i*i是因为防止出现重复，比如2*3和3*2这种情况，这个表达式是将倍数的值全部设置为0
                prime[i*i:n:i] = [0]*len(prime[i*i:n:i])
        return sum(prime)
