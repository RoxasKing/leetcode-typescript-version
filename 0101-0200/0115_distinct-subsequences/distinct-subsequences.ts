/*
  Given two strings s and t, return the number of distinct subsequences of s which equals t.

  A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).

  It is guaranteed the answer fits on a 32-bit signed integer.

  Example 1:
    Input: s = "rabbbit", t = "rabbit"
    Output: 3
    Explanation:
      As shown below, there are 3 ways you can generate "rabbit" from S.
      rabbbit
      rabbbit
      rabbbit

  Example 2:
    Input: s = "babgbag", t = "bag"
    Output: 5
    Explanation:
      As shown below, there are 5 ways you can generate "bag" from S.
      babgbag
      babgbag
      babgbag
      babgbag
      babgbag

  Constraints:
    1. 1 <= s.length, t.length <= 1000
    2. s and t consist of English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/distinct-subsequences
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

function numDistinct(s: string, t: string): number {
    let m = s.length, n = t.length
    let dp: number[][] = [[]]
    for (let i = 0; i <= m; i++) {
        dp[0].push(1)
    }
    for (let i = 0; i < n; i++) {
        dp.push([0])
        for (let j = 0; j < m; j++) {
            dp[i + 1].push(dp[i + 1][j])
            if (t[i] === s[j]) {
                dp[i + 1][j + 1] += dp[i][j]
            }
        }
    }
    return dp[n][m]
}

export { numDistinct }
