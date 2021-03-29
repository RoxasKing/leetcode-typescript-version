import { reverseBetween, ListNode } from './reverse-linked-list-ii'
import assert from 'assert'

describe('reverseBetween()', () => {
    let tests = [
        { args: { head: [1, 2, 3, 4, 5], m: 2, n: 4 }, expected: [1, 4, 3, 2, 5] },
        { args: { head: [5], m: 1, n: 1 }, expected: [5] },
    ]

    tests.forEach((test) => {
        let head = arr2list(test.args.head), m = test.args.m, n = test.args.n
        it(`reverseBetween([${head}], ${m}, ${n}) === ${test.expected}`, () => {
            assert.deepStrictEqual(list2arr(reverseBetween(head, m, n)), test.expected)
        })
    })
})

function arr2list(nums: number[]): ListNode | null {
    if (nums.length === 0) { return null }
    let head = new ListNode(nums[nums.length - 1])
    for (let i = nums.length - 2; i >= 0; i--) {
        head = new ListNode(nums[i], head)
    }
    return head
}

function list2arr(root: ListNode | null): number[] {
    let out: number[] = []
    while (root !== null) {
        out.push(root.val)
        root = root.next as ListNode
    }
    return out
}
