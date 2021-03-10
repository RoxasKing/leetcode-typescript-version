/*
  Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

  Implement the MyQueue class:

  void push(int x) Pushes element x to the back of the queue.
  int pop() Removes the element from the front of the queue and returns it.
  int peek() Returns the element at the front of the queue.
  boolean empty() Returns true if the queue is empty, false otherwise.
  Notes:

  You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
  Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
  Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.

  Example 1:
    Input
      ["MyQueue", "push", "push", "peek", "pop", "empty"]
      [[], [1], [2], [], [], []]
    Output
      [null, null, null, 1, 1, false]
    Explanation
      MyQueue myQueue = new MyQueue();
      myQueue.push(1); // queue is: [1]
      myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
      myQueue.peek(); // return 1
      myQueue.pop(); // return 1, queue is [2]
      myQueue.empty(); // return false

  Constraints:
    1. 1 <= x <= 9
    2. At most 100 calls will be made to push, pop, peek, and empty.
    3. All the calls to pop and peek are valid.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-queue-using-stacks
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

class MyQueue {
    a: number[] = []
    b: number[] = []

    constructor() {

    }

    push(x: number): void {
        while (this.b.length > 0) { this.a.push(this.b.pop() as number) }
        this.a.push(x)
    }

    pop(): number {
        while (this.a.length > 0) { this.b.push(this.a.pop() as number) }
        return this.b.pop() as number
    }

    peek(): number {
        while (this.a.length > 0) { this.b.push(this.a.pop() as number) }
        return this.b[this.b.length - 1]
    }

    empty(): boolean {
        return this.a.length === 0 && this.b.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

export { MyQueue }
