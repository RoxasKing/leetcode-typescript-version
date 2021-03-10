/*
  Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

  A palindrome string is a string that reads the same backward as forward.

  Example 1:
    Input: s = "aab"
    Output: [["a","a","b"],["aa","b"]]

  Example 2:
    Input: s = "a"
    Output: [["a"]]

  Constraints:
    1. 1 <= s.length <= 16
    2. s contains only lowercase English letters.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindrome-partitioning
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// DFS + Backtracking

function partition(s: string): string[][] {
    let out: string[][] = []
    dfs(s, [], out)
    return out
};

function dfs(s: string, cur: string[], out: string[][]) {
    if (s.length === 0) {
        out.push([...cur])
        return
    }

    for (let i = 0; i < s.length; i++) {
        if (isPalindrome(s.slice(0, i + 1))) {
            cur.push(s.slice(0, i + 1))
            dfs(s.slice(i + 1), cur, out)
            cur.pop()
        }
    }
}

function isPalindrome(s: string): boolean {
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s.charAt(l) !== s.charAt(r)) { return false }
        l++
        r--
    }
    return true
}

export { partition }
