/*
 * [387] First Unique Character in a String
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (33.37%)
 * Total Accepted:    13.4K
 * Total Submissions: 40.2K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  arr = s.split("")
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (arr.indexOf(item) == arr.lastIndexOf(item)) return i
  }
  return -1
}

