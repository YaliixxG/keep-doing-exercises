/*
 * [389] Find the Difference
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (50.15%)
 * Total Accepted:    3.5K
 * Total Submissions: 6.9K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

//  先把两个字符串变成数组排序，然后在短的数组末尾添加一个数字0后 来进行循环，两种情况：
//  如果在非0的情况下，不相等，则直接得出结果
//  或者是循环到等于0的情况下，得出结果
var findTheDifference = function(s, t) {
  let arrs = s.split("").sort()
  arrs.push(0)
  let arrt = t.split("").sort()
  for (let i = 0; i < arrs.length; i++) {
    if (arrs != 0) {
      if (arrs[i] != arrt[i]) return arrt[i]
    } else {
      return arrt[arrt.length - 1]
    }
  }
}
// findTheDifference("", "a")
