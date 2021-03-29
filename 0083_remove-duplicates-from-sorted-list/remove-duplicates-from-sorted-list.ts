/*
  Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

  Example 1:
    Input: head = [1,1,2]
    Output: [1,2]

  Example 2:
    Input: head = [1,1,2,3,3]
    Output: [1,2,3]

  Constraints:
    1. The number of nodes in the list is in the range [0, 300].
    2. -100 <= Node.val <= 100
    3. The list is guaranteed to be sorted in ascending order.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) { return head }
    let ptr = head
    for (let n = head.next; n !== null; n = n.next) {
        if (n.val !== ptr.val) {
            ptr.next = n
            ptr = n
        }
    }
    ptr.next = null
    return head
}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export { deleteDuplicates, ListNode }
