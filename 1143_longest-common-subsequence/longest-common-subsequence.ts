/*
  Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

  A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

    For example, "ace" is a subsequence of "abcde".

  A common subsequence of two strings is a subsequence that is common to both strings.

  Example 1:
    Input: text1 = "abcde", text2 = "ace"
    Output: 3
    Explanation: The longest common subsequence is "ace" and its length is 3.

  Example 2:
    Input: text1 = "abc", text2 = "abc"
    Output: 3
    Explanation: The longest common subsequence is "abc" and its length is 3.

  Example 3:
    Input: text1 = "abc", text2 = "def"
    Output: 0
    Explanation: There is no such common subsequence, so the result is 0.

  Constraints:
    1. 1 <= text1.length, text2.length <= 1000
    2. text1 and text2 consist of only lowercase English characters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-common-subsequence
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

function longestCommonSubsequence(text1: string, text2: string): number {
    let dp0 = new Array<number>(text2.length + 1).fill(0)
    let dp1 = new Array<number>(text2.length + 1).fill(0)
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1.charAt(i) === text2.charAt(j)) {
                dp1[j + 1] = dp0[j] + 1
            } else {
                dp1[j + 1] = Math.max(dp1[j], dp0[j + 1])
            }
        }
        [dp0, dp1] = [dp1, dp0]
    }
    return dp0[text2.length]
}

export { longestCommonSubsequence }
