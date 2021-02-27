import { numSimilarGroups } from './similar-string-groups'
import assert from 'assert'

describe('numSimilarGroups()', () => {
    let tests: { args: string[], expected: number }[] = [
        { args: ["tars", "rats", "arts", "star"], expected: 2 },
        { args: ["omv", "ovm"], expected: 1 },
        { args: ["abc", "abc"], expected: 1 },
    ]

    tests.forEach((test) => {
        it(`numSimilarGroups(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(numSimilarGroups(test.args), test.expected)
        })
    })
})
