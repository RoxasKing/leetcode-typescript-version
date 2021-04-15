/*
  You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

  Implement the NestedIterator class:
    1. NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
    2. int next() Returns the next integer in the nested list.
    3. boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.

  Example 1:
    Input: nestedList = [[1,1],2,[1,1]]
    Output: [1,1,2,1,1]
    Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].

  Example 2:
    Input: nestedList = [1,[4,[6]]]
    Output: [1,4,6]
    Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].

  Constraints:
    1. 1 <= nestedList.length <= 500
    2. The values of the integers in the nested list is in the range [-10^6, 10^6].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Recursion

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    list: NestedInteger[] = []
    idx: number = 0
    iter: NestedIterator | null = null

    constructor(nestedList: NestedInteger[]) {
        this.list = nestedList
    }

    hasNext(): boolean {
        while (true) {
            if (this.idx === this.list.length) { return false }

            if (this.list[this.idx].isInteger()) { return true }

            if (this.iter === null) {
                this.iter = new NestedIterator(this.list[this.idx].getList())
            }

            if (this.iter.hasNext()) { return true }

            this.idx++
            this.iter = null
        }
    }

    next(): number {
        if (!this.list[this.idx].isInteger()) { return this.iter?.next() as number }

        let out = this.list[this.idx].getInteger() as number
        this.idx++
        return out
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */

class NestedInteger {
    isNumber = false
    value = -Infinity
    list: NestedInteger[] = []

    // If value is provided, then it holds a single integer
    // Otherwise it holds an empty nested list
    constructor(value?: number) {
        if (value) {
            this.value = value
        }
    }

    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    isInteger(): boolean {
        return this.isNumber
    }

    // Return the single integer that this NestedInteger holds, if it holds a single integer
    // Return null if this NestedInteger holds a nested list
    getInteger(): number | null {
        if (this.isInteger()) {
            return this.value
        }
        return null
    }

    // Set this NestedInteger to hold a single integer equal to value.
    setInteger(value: number) {
        this.isNumber = true
        this.value = value
        this.list = []
    }

    // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    add(elem: NestedInteger) {
        this.isNumber = false
        this.value = -Infinity
        this.list.push(elem)
    }

    // Return the nested list that this NestedInteger holds,
    // or an empty list if this NestedInteger holds a single integer
    getList(): NestedInteger[] {
        return this.list
    }
}

export { NestedIterator, NestedInteger }
