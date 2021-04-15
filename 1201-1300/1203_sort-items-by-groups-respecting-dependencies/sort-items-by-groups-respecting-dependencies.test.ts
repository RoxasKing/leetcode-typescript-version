import { sortItems } from './sort-items-by-groups-respecting-dependencies'
import assert from 'assert'

describe('sortItems()', () => {
    let tests: {
        args: {
            n: number,
            m: number,
            group: number[],
            beforeItems: number[][]
        },
        expected: number[]
    }[] = [
            {
                args: {
                    n: 8,
                    m: 2,
                    group: [-1, -1, 1, 0, 0, 1, 0, -1],
                    beforeItems: [[], [6], [5], [6], [3, 6], [], [], []],
                },
                expected: [6, 3, 4, 5, 2, 0, 1, 7]
            },
            {
                args: {
                    n: 8,
                    m: 2,
                    group: [-1, -1, 1, 0, 0, 1, 0, -1],
                    beforeItems: [[], [6], [5], [6], [3], [], [4], []],
                },
                expected: []
            },
            {
                args: {
                    n: 5,
                    m: 5,
                    group: [2, 0, -1, 3, 0],
                    beforeItems: [[2, 1, 3], [2, 4], [], [], []],
                },
                expected: [2, 4, 1, 3, 0]
            },
            {
                args: {
                    n: 5,
                    m: 5,
                    group: [0, 1, 2, 3, 4],
                    beforeItems: [[1], [0], [2], [3], [4]],
                },
                expected: []
            },
            {
                args: {
                    n: 4,
                    m: 1,
                    group: [-1, 0, 0, -1],
                    beforeItems: [[], [0], [1, 3], [2]],
                },
                expected: []
            },
            {
                args: {
                    n: 10,
                    m: 4,
                    group: [2, 2, 2, 1, 0, 1, 3, 2, 0, 1],
                    beforeItems: [[7, 6, 2, 5, 3], [], [], [], [7], [], [], [], [], []],
                },
                expected: [3, 5, 9, 6, 2, 7, 1, 0, 4, 8]
            },
        ]

    tests.forEach((test) => {
        it(`sortItems(${test.args}) === ${test.expected}`, () => {
            let n = test.args.n
            let m = test.args.m
            let group = test.args.group
            let beforeItems = test.args.beforeItems
            assert.deepStrictEqual(sortItems(n, m, group, beforeItems), test.expected)
        })
    })
})
