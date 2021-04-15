/*
  In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  These characters divide the square into contiguous regions.
  (Note that backslash characters are escaped, so a \ is represented as "\\".)
  Return the number of regions.

  Example 1:
    Input:
    [
      " /",
      "/ "
    ]
    Output: 2
    Explanation: The 2x2 grid is as follows:

  Example 2:
    Input:
    [
      " /",
      "  "
    ]
    Output: 1
    Explanation: The 2x2 grid is as follows:

  Example 3:
    Input:
    [
      "\\/",
      "/\\"
    ]
    Output: 4
    Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
    The 2x2 grid is as follows:

  Example 4:
    Input:
    [
      "/\\",
      "\\/"
    ]
    Output: 5
    Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
    The 2x2 grid is as follows:

  Example 5:
    Input:
    [
      "//",
      "/ "
    ]
    Output: 3
    Explanation: The 2x2 grid is as follows:

  Note:
    1. 1 <= grid.length == grid[0].length <= 30
    2. grid[i][j] is either '/', '\', or ' '.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/regions-cut-by-slashes
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Union-Find

function regionsBySlashes(grid: string[]): number {
    let n = grid.length
    let size = 4 * n * n
    let uf = new unionFind(size)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let up = 4 * (n * j + i)
            let right = up + 1, down = up + 2, left = up + 3
            let char = grid[i].charAt(j)
            if (char === '/') {
                uf.union(right, down)
                uf.union(left, up)
            } else if (char == '\\') {
                uf.union(up, right)
                uf.union(down, left)
            } else {
                uf.union(right, up)
                uf.union(down, up)
                uf.union(left, up)
            }
            if (i + 1 < n) {
                let rightLeft = left + 4
                uf.union(rightLeft, right)
            }
            if (j + 1 < n) {
                let downUp = up + 4 * n
                uf.union(downUp, down)
            }
        }
    }
    let out = 0
    let mark = new Map<number, undefined>()
    for (let i = 0; i < size; i++) {
        let x = uf.find(i)
        if (!mark.has(x)) {
            out++
            mark.set(x, undefined)
        }
    }
    return out
}

class unionFind {
    parent: number[] = []
    size: number[] = []

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.parent.push(i)
            this.size.push(1)
        }
    }

    find(x: number): number {
        if (this.parent[x] !== x) { this.parent[x] = this.find(this.parent[x]) }
        return this.parent[x]
    }

    union(x: number, y: number) {
        x = this.find(x)
        y = this.find(y)
        if (x === y) { return }
        if (this.size[x] < this.size[y]) { [x, y] = [y, x] }
        this.parent[y] = x
        this.size[x] += this.size[y]
    }
}

export { regionsBySlashes }
