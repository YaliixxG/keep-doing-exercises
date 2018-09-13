/*
 * [14] Longest Common Prefix
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (28.90%)
 * Total Accepted:    19.8K
 * Total Submissions: 68.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = "",
    intstrs = strs[0]
  if (!strs.length) return result
  for (let i = 0; i < intstrs.length; i++) {
    for (let k = 0; k < strs.length; k++) {
      if (intstrs[i] != strs[k][i]) {
        return result
      }
    }
    result += intstrs[i]
  }
  return result
}

longestCommonPrefix(["flower", "flow", "flight"])
