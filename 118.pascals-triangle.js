/*
 * [118] Pascal's Triangle
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (55.54%)
 * Total Accepted:    7.5K
 * Total Submissions: 13.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []

  for (let i = 1; i <= numRows; i++) {
    if (i == 1) res.push([1])
    else if (i == 2) res.push([1, 1])
    else {
      let preArr = res[res.length - 1]
      let arr = new Array(i)
      arr[0] = 1
      for (let j = 0; j < i - 2; j++) {
        arr[j + 1] = preArr[j] + preArr[j + 1]
      }
      arr[i - 1] = 1
      res.push(arr)
    }
  }

  return res
}
