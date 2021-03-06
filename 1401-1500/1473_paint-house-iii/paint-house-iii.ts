/*
  There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.

  A neighborhood is a maximal group of continuous houses that are painted with the same color.
    For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].

  Given an array houses, an m x n matrix cost and an integer target where:
    1. houses[i]: is the color of the house i, and 0 if the house is not painted yet.
    2. cost[i][j]: is the cost of paint the house i with the color j + 1.

  Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return -1.

  Example 1:
    Input: houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
    Output: 9
    Explanation: Paint houses of this way [1,2,2,1,1]
      This array contains target = 3 neighborhoods, [{1}, {2,2}, {1,1}].
      Cost of paint all houses (1 + 1 + 1 + 1 + 5) = 9.

  Example 2:
    Input: houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
    Output: 11
    Explanation: Some houses are already painted, Paint the houses of this way [2,2,1,2,2]
      This array contains target = 3 neighborhoods, [{2,2}, {1}, {2,2}].
      Cost of paint the first and last house (10 + 1) = 11.

  Example 3:
    Input: houses = [0,0,0,0,0], cost = [[1,10],[10,1],[1,10],[10,1],[1,10]], m = 5, n = 2, target = 5
    Output: 5

  Example 4:
    Input: houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n = 3, target = 3
    Output: -1
    Explanation: Houses are already painted with a total of 4 neighborhoods [{3},{1},{2},{3}] different of target = 3.

  Constraints:
    1. m == houses.length == cost.length
    2. n == cost[i].length
    3. 1 <= m <= 100
    4. 1 <= n <= 20
    5. 1 <= target <= m
    6. 0 <= houses[i] <= n
    7. 1 <= cost[i][j] <= 10^4

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/paint-house-iii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Important!

// Dynamic Programming

function minCost(houses: number[], cost: number[][], m: number, n: number, target: number): number {
    let dp: number[][][] = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        for (let j = 0; j < n; j++) {
            dp[i][j] = new Array(target)
            for (let k = 0; k < target; k++) {
                dp[i][j][k] = Infinity
            }
        }
    }

    if (houses[0] > 0) {
        dp[0][houses[0] - 1][0] = 0
    } else {
        for (let j = 0; j < n; j++) {
            dp[0][j][0] = cost[0][j]
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < target; k++) {
                if (dp[i - 1][j][k] === Infinity) { continue }
                if (houses[i] > 0) {
                    if (houses[i] - 1 === j) {
                        dp[i][houses[i] - 1][k] = Math.min(dp[i][houses[i] - 1][k], dp[i - 1][j][k])
                    } else if (k + 1 < target) {
                        dp[i][houses[i] - 1][k + 1] = Math.min(dp[i][houses[i] - 1][k + 1], dp[i - 1][j][k])
                    }
                    continue
                }
                for (let nj = 0; nj < n; nj++) {
                    if (nj === j) {
                        dp[i][nj][k] = Math.min(dp[i][nj][k], dp[i - 1][j][k] + cost[i][nj])
                    } else if (k + 1 < target) {
                        dp[i][nj][k + 1] = Math.min(dp[i][nj][k + 1], dp[i - 1][j][k] + cost[i][nj])
                    }
                }
            }
        }
    }

    let out = Infinity
    for (let j = 0; j < n; j++) {
        out = Math.min(out, dp[m - 1][j][target - 1])
    }
    if (out === Infinity) { return -1 }
    return out
}

export { minCost }
