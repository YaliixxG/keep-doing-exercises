/*
 * [20] Valid Parentheses
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (32.46%)
 * Total Accepted:    16.4K
 * Total Submissions: 50.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = s.split(''),
        crr = s.split(''),
        brr = []
    if (arr.length % 2 != 0) {
        return false
    } else if (arr[0] == ')' || arr[0] == '}' || arr[0] == ']') {
        return false
    } else {
        crr.map((item, index) => {
            if (brr.length == 0) {
                brr.push(arr[arr.length - 1])
                arr.pop()
            } else {
                if (match(arr[arr.length - 1], brr[brr.length - 1])) {
                    arr.pop()
                    brr.pop()
                } else {
                    brr.push(arr[arr.length - 1])
                    arr.pop()
                }
            }
        })
        return brr.length == 0
    }
    function match(x, y) {
        if (
            (x == '(' && y == ')') ||
            (x == '{' && y == '}') ||
            (x == '[' && y == ']')
        ) {
            return true
        }
        return false
    }
}

// console.log(isValid('([)]'))
