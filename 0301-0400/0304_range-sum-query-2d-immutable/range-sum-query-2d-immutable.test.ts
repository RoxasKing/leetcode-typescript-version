import { NumMatrix } from './range-sum-query-2d-immutable'
import assert from 'assert'

describe('NumMatrix()', () => {
    let matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
    ]
    let nm = new NumMatrix(matrix)

    let tests = [
        { args: [2, 1, 4, 3], expected: 8 },
        { args: [1, 1, 2, 2], expected: 11 },
        { args: [1, 2, 2, 4], expected: 12 },
    ]

    tests.forEach((test) => {
        let args = test.args
        it(`nm.sumRegion(${args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(nm.sumRegion(args[0], args[1], args[2], args[3]), test.expected)
        })
    })
})
