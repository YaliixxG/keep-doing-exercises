/*
 * [383] Ransom Note
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (42.09%)
 * Total Accepted:    2.3K
 * Total Submissions: 5.6K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给定一个赎金信 (ransom)
 * 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回
 * true ；否则返回 false。
 * 
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
 * 
 * 注意：
 * 
 * 你可以假设两个字符串均只含有小写字母。
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let lenR = ransomNote.length,
    lenM = magazine.length

  if (lenR > lenM) return false
  if (lenR == 0) return true
  for (let i = 0; i < lenR; i++) {
    let index = magazine.indexOf(ransomNote[i])

    if (index == -1) {
      return false
    } else {
      magazine = magazine.slice(0, index) + magazine.slice(index + 1)
      if (lenM - magazine.length == lenR) return true
    }
  }
}

// console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"))

// 这个题目逻辑很简单，只是太需要细心了，一点点思维的漏洞就导致报错(╥╯^╰╥) ，我提交了多次错误的答案。
