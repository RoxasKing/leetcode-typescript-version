/*
  Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

  To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

  To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

  Example 1:
    Input: [[1,1,0],[1,0,1],[0,0,0]]
    Output: [[1,0,0],[0,1,0],[1,1,1]]
    Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
    Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

  Example 2:
    Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
    Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
    Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
    Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

  Notes:
    1. 1 <= A.length = A[0].length <= 20
    2. 0 <= A[i][j] <= 1

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/flipping-an-image
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function flipAndInvertImage(A: number[][]): number[][] {
  let m = A.length, n = A[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n >> 1; j++) {
      [A[i][j], A[i][n - 1 - j]] = [A[i][n - 1 - j], A[i][j]]
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 0) {
        A[i][j] = 1
      } else {
        A[i][j] = 0
      }
    }
  }
  return A
}

export { flipAndInvertImage }
