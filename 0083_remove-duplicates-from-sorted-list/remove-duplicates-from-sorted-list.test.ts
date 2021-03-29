import { deleteDuplicates, ListNode } from './remove-duplicates-from-sorted-list'
import assert from 'assert'

describe('deleteDuplicates()', () => {
    let tests = [
        { args: [1, 1, 2], expected: [1, 2] },
        { args: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
    ]

    tests.forEach((test) => {
        it(`deleteDuplicates(${test.args}) === ${test.expected}`, () => {
            assert.deepStrictEqual(list2arr(deleteDuplicates(arr2list(test.args))), test.expected)
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
