/*
  You are given an array nums consisting of non-negative integers. You are also given a queries array, where queries[i] = [xi, mi].

  The answer to the i^th query is the maximum bitwise XOR value of xi and any element of nums that does not exceed mi. In other words, the answer is max(nums[j] XOR xi) for all j such that nums[j] <= mi. If all elements in nums are larger than mi, then the answer is -1.

  Return an integer array answer where answer.length == queries.length and answer[i] is the answer to the i^th query.

  Example 1:
    Input: nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
    Output: [3,3,7]
    Explanation:
      1) 0 and 1 are the only two integers not greater than 1. 0 XOR 3 = 3 and 1 XOR 3 = 2. The larger of the two is 3.
      2) 1 XOR 2 = 3.
      3) 5 XOR 2 = 7.

  Example 2:
    Input: nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
    Output: [15,-1,5]

  Constraints:
    1. 1 <= nums.length, queries.length <= 10^5
    2. queries[i].length == 2
    3. 0 <= nums[j], xi, mi <= 10^9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/maximum-xor-with-an-element-from-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!

// Trie
// Bit Manipulation

function maximizeXor(nums: number[], queries: number[][]): number[] {
    let m = nums.length, n = queries.length
    nums.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)
    let idxs: number[] = []
    for (let i = 0; i < n; i++) { idxs.push(i) }
    idxs.sort((a, b) => (queries[a][1] < queries[b][1]) ? -1 : (queries[a][1] > queries[b][1]) ? 1 : 0)
    let trie = new Array(2).fill(null)
    let out = new Array(n).fill(0)
    for (let i = 0, j = 0; i < n; i++) {
        let idx = idxs[i]
        let query = queries[idx]
        let xi = query[0], mi = query[1]
        for (; j < m && nums[j] <= mi; j++) {
            if (j > 0 && nums[j] === nums[j - 1]) { continue }
            let t = trie
            let num = nums[j]
            for (let i = 31; i >= 0; i--) {
                let child = (num >> i) & 1
                if (!t[child]) { t[child] = new Array(2).fill(null) }
                t = t[child]
            }
        }
        if (j > 0) {
            let t = trie
            for (let i = 31; i >= 0; i--) {
                let child = (xi >> i) & 1
                if (t[1 - child]) {
                    out[idx] |= 1 << i
                    t = t[1 - child]
                } else {
                    t = t[child]
                }
            }
        } else {
            out[idx] = -1
        }
    }
    return out
}

export { maximizeXor }
