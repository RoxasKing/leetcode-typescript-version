import { swimInWater } from "./swim-in-rising-water"
import assert from 'assert'

describe('swimInWater()', () => {
    let tests: { args: number[][], expected: number }[] = [
        { args: [[0, 2], [1, 3]], expected: 3 },
        {
            args: [
                [0, 1, 2, 3, 4],
                [24, 23, 22, 21, 5],
                [12, 13, 14, 15, 16],
                [11, 17, 18, 19, 20],
                [10, 9, 8, 7, 6],
            ],
            expected: 16
        },
    ]

    tests.forEach((test) => {
        it(`swimInWater(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(swimInWater(test.args), test.expected)
        })
    })
})
