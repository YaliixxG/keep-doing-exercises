/*
 * [202] Happy Number
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (48.33%)
 * Total Accepted:    5.1K
 * Total Submissions: 10.5K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到
 * 1。如果可以变为 1，那么这个数就是快乐数。
 * 
 * 示例: 
 * 
 * 输入: 19
 * 输出: true
 * 解释: 
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * 
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function(n) {
//   let plusArr = []
//   //检验是否在这个数组里出现过
//   test = (plusArr, sum) => {
//     for (let i = 0; i < plusArr.length; i++) {
//       if (plusArr[i] == sum) {
//         return true
//       }
//       plusArr.push(sum)
//       return false
//     }
//   }
//   //计算平方和
//   count = sum => {
//     n = n.toString()
//     arr = n.split("")
//     return arr.reduce((a, b) => {
//       return a + Math.pow(b, 2)
//     }, 0)
//   }
//   let sum = n
//   while (!test(plusArr, sum)) {
//     n = count(sum)
//     if (n == 1) {
//       return true
//     }
//     sum = n
//   }
//   return false
// }

// console.log(isHappy(20))

var isHappy = function(n) {
  var history = []
  //test函数用来判断改值是否出现过，如果没有出现，将改值压入数组
  function test(history, num) {
    for (var i = 0; i < history.length; i++) {
      if (num == history[i]) {
        return true
      }
    }
    history.push(num)
    return false
  }
  var num = n
  while (!test(history, num)) {
    //将数字转换为字符串之后按位处理
    var ds = num.toString()
    var count = 0
    for (var i = 0; i < ds.length; i++) {
      count = count + parseInt(ds[i]) * parseInt(ds[i])
    }
    if (num == 1) {
      return true
    }
    num = count
  }
  return false
}

isHappy(20)
