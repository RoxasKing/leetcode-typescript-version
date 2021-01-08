import { rotate } from './rotate-array'
import assert from 'assert'

describe('rotate()', () => {
  let tests: { args: { nums: number[], k: number }, expected: number[] }[] = [
    { args: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }, expected: [5, 6, 7, 1, 2, 3, 4] },
    { args: { nums: [-1, -100, 3, 99], k: 2 }, expected: [3, 99, -1, -100] },
    { args: { nums: [-1], k: 2 }, expected: [-1] },
  ]

  tests.forEach((test) => {
    it(`rotate(${test.args}) === ${test.expected}`, () => {
      rotate(test.args.nums, test.args.k)
      assert.deepStrictEqual(test.args.nums, test.expected)
    })
  })
})
