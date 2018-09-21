/*
 * [168] Excel Sheet Column Title
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (27.22%)
 * Total Accepted:    2.2K
 * Total Submissions: 8.2K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    map = {},
    res = []
  arr.forEach(function(v, i) {
    map[i + 1] = v
  })

  while (true) {
    num = n % 26
    if (num == 0) {
      num = 26
    }
    res.push(map[num])
    n = (n - num) / 26
    if (n < 1) break
  }

  return res.reverse().join("")
}
