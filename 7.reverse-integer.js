/*
 * [7] Reverse Integer
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (28.69%)
 * Total Accepted:    34K
 * Total Submissions: 118.3K
 * Testcase Example:  '123'
 *
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = String(x).split(''),
        brr = []
    if (x < 0) {
        brr.push(arr[0])
        arr.splice(0, 1)
    }
    for (let i = 0; i < arr.length; i++) {
        brr.push(arr[arr.length - (i + 1)])
    }
    var ret = Number(brr.join('').replace(/\b(0+)/gi, ''))
    if (ret > 2 ** 31 - 1 || ret < (-2) ** 31) {
        ret = 0
    }
    return ret
}
