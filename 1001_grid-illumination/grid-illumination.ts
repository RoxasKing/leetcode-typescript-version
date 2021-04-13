/*
  You are given a grid of size N x N, and each cell of this grid has a lamp that is initially turned off.

  You are also given an array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.

  Finally, you are given a query array queries, where queries[i] = [rowi, coli]. For the ith query, determine whether grid[rowi][coli] is illuminated or not. After answering the ith query, turn off the lamp at grid[rowi][coli] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowi][coli].

  Return an array of integers ans, where ans[i] should be 1 if the lamp in the ith query was illuminated, or 0 if the lamp was not.

  Example 1:
    Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
    Output: [1,0]
    Explanation: We have the initial grid with all lamps turned off. In the above picture we see the grid after turning on the lamp at grid[0][0] then turning on the lamp at grid[4][4].
    The 0th query asks if the lamp at grid[1][1] is illuminated or not (the blue square). It is illuminated, so set ans[0] = 1. Then, we turn off all lamps in the red square.

    The 1st query asks if the lamp at grid[1][0] is illuminated or not (the blue square). It is not illuminated, so set ans[1] = 0. Then, we turn off all lamps in the red rectangle.

  Example 2:
    Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
    Output: [1,1]

  Example 3:
    Input: N = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]
    Output: [1,1,0]

  Constraints:
    1 <= N <= 10^9
    0 <= lamps.length <= 20000
    lamps[i].length == 2
    0 <= lamps[i][j] < N
    0 <= queries.length <= 20000
    queries[i].length == 2
    0 <= queries[i][j] < N

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/grid-illumination
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Hash

function gridIllumination(N: number, lamps: number[][], queries: number[][]): number[] {
    let mark = new Map<number, boolean>()
    let r = new Map<number, number>()
    let c = new Map<number, number>()
    let pd = new Map<number, number>()
    let ad = new Map<number, number>()
    for (let lamp of lamps) {
        let x = lamp[0], y = lamp[1]
        let idx = (1e9 + 1) * x + y
        if (mark.get(idx) === true) { continue }
        mark.set(idx, true)
        if (!r.has(x)) { r.set(x, 0) }
        r.set(x, r.get(x) as number + 1)
        if (!c.has(y)) { c.set(y, 0) }
        c.set(y, c.get(y) as number + 1)
        if (!pd.has(x - y + N - 1)) { pd.set(x - y + N - 1, 0) }
        pd.set(x - y + N - 1, pd.get(x - y + N - 1) as number + 1)
        if (!ad.has(x + y)) { ad.set(x + y, 0) }
        ad.set(x + y, ad.get(x + y) as number + 1)
    }
    let out: number[] = []
    for (let q of queries) {
        let x = q[0], y = q[1]
        out.push(isIlluminated(N, r, c, pd, ad, x, y))
        turnOffLamps(N, mark, r, c, pd, ad, x, y)
    }
    return out
}

function turnOffLamps(
    N: number,
    mark: Map<number, boolean>,
    r: Map<number, number>,
    c: Map<number, number>,
    pd: Map<number, number>,
    ad: Map<number, number>,
    x: number,
    y: number,
) {
    turnOffLamp(N, mark, r, c, pd, ad, x - 1, y - 1)
    turnOffLamp(N, mark, r, c, pd, ad, x - 1, y)
    turnOffLamp(N, mark, r, c, pd, ad, x - 1, y + 1)
    turnOffLamp(N, mark, r, c, pd, ad, x, y - 1)
    turnOffLamp(N, mark, r, c, pd, ad, x, y)
    turnOffLamp(N, mark, r, c, pd, ad, x, y + 1)
    turnOffLamp(N, mark, r, c, pd, ad, x + 1, y - 1)
    turnOffLamp(N, mark, r, c, pd, ad, x + 1, y)
    turnOffLamp(N, mark, r, c, pd, ad, x + 1, y + 1)
}

function turnOffLamp(
    N: number,
    mark: Map<number, boolean>,
    r: Map<number, number>,
    c: Map<number, number>,
    pd: Map<number, number>,
    ad: Map<number, number>,
    x: number,
    y: number,
) {
    let idx = (1e9 + 1) * x + y
    if (0 <= x && x < N && 0 <= y && y < N && mark.get(idx) === true) {
        mark.set(idx, false)
        r.set(x, r.get(x) as number - 1)
        c.set(y, c.get(y) as number - 1)
        pd.set(x - y + N - 1, pd.get(x - y + N - 1) as number - 1)
        ad.set(x + y, ad.get(x + y) as number - 1)
    }
}

function isIlluminated(
    N: number,
    r: Map<number, number>,
    c: Map<number, number>,
    pd: Map<number, number>,
    ad: Map<number, number>,
    x: number,
    y: number,
): number {
    return (
        r.get(x) as number > 0 ||
        c.get(y) as number > 0 ||
        pd.get(x - y + N - 1) as number > 0 ||
        ad.get(x + y) as number > 0
    ) ? 1 : 0
}

export { gridIllumination }
