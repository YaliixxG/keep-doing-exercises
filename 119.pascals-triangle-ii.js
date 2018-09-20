/*
 * [119] Pascal's Triangle II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (50.15%)
 * Total Accepted:    4.3K
 * Total Submissions: 8.6K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let res = []

  for (let i = 1; i <= rowIndex + 1; i++) {
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

  return res[rowIndex]
}
