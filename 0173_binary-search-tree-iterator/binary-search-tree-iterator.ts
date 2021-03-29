/*
  Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

  BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
  boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
  int next() Moves the pointer to the right, then returns the number at the pointer.
  Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

  You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

  Example 1:
    Input
      ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
      [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
    Output
      [null, 3, 7, true, 9, true, 15, true, 20, false]
    Explanation
      BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
      bSTIterator.next();    // return 3
      bSTIterator.next();    // return 7
      bSTIterator.hasNext(); // return True
      bSTIterator.next();    // return 9
      bSTIterator.hasNext(); // return True
      bSTIterator.next();    // return 15
      bSTIterator.hasNext(); // return True
      bSTIterator.next();    // return 20
      bSTIterator.hasNext(); // return False

  Constraints:
    1. The number of nodes in the tree is in the range [1, 10^5].
    2. 0 <= Node.val <= 10^6
    3. At most 10^5 calls will be made to hasNext, and next.

  Follow up:
    Could you implement next() and hasNext() to run in average O(1) time and use O(h) memory, where h is the height of the tree?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/binary-search-tree-iterator
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Morris Traversal

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


class BSTIterator {
    root: TreeNode | null = null

    constructor(root: TreeNode | null) {
        this.root = root
    }

    next(): number {
        while (this.root?.left !== null) {
            let prev = this.root?.left
            while (prev?.right !== null && prev?.right !== this.root) {
                prev = prev?.right
            }
            if (prev.right !== this.root) {
                prev.right = this.root
                this.root = this.root?.left as TreeNode
            } else {
                prev.right = null
                break
            }
        }
        let out = this.root?.val as number
        this.root = this.root?.right as TreeNode
        return out
    }

    hasNext(): boolean {
        return this.root !== null
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export { BSTIterator, TreeNode }
