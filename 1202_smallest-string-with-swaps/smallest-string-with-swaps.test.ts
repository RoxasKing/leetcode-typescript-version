import { smallestStringWithSwaps } from './smallest-string-with-swaps'
import assert from 'assert'

describe('smallestStringWithSwaps()', () => {
    let tests: { args: { s: string, pairs: number[][] }, expected: string }[] = [
        { args: { s: 'dcab', pairs: [[0, 3], [1, 2]] }, expected: 'bacd' },
        { args: { s: 'dcab', pairs: [[0, 3], [1, 2], [0, 2]] }, expected: 'abcd' },
        { args: { s: 'cba', pairs: [[0, 1], [1, 2]] }, expected: 'abc' },
        { args: { s: 'c', pairs: [] }, expected: 'c' },
        { args: { s: 'cb', pairs: [[0, 1]] }, expected: 'bc' },
    ]

    tests.forEach((test) => {
        it(`smallestStringWithSwaps(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(smallestStringWithSwaps(test.args.s, test.args.pairs), test.expected)
        })
    })
})
