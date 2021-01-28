/*
  Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

  Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

  Example 1:
    Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
    Output: 1

  Constraints:
    1 <= dominoes.length <= 40000
    1 <= dominoes[i][j] <= 9

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function numEquivDominoPairs(dominoes: number[][]): number {
  let count = new Array<number>(100).fill(0)
  for (let d of dominoes) {
    let a = d[0], b = d[1]
    if (a > b) { [a, b] = [b, a] }
    count[a * 10 + b]++
  }
  let out = 0
  for (let c of count) {
    out += c * (c - 1) / 2
  }
  return out
}

export { numEquivDominoPairs }
