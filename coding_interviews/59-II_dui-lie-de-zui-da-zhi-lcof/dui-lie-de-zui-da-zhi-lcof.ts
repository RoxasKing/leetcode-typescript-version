/*
  请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。

  若队列为空，pop_front 和 max_value 需要返回 -1

  示例 1：
    输入:
    ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
    [[],[1],[2],[],[],[]]
    输出: [null,null,null,2,1,2]

  示例 2：
    输入:
    ["MaxQueue","pop_front","max_value"]
    [[],[],[]]
    输出: [null,-1,-1]

  限制：
    1. 1 <= push_back,pop_front,max_value的总操作数 <= 10000
    2. 1 <= value <= 10^5

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Monotonous Queue

class MaxQueue {
    q: number[] = []
    m: number[] = []

    constructor() { }

    max_value(): number {
        if (this.m.length === 0) { return -1 }
        return this.m[0]
    }

    push_back(value: number): void {
        while (this.m.length > 0 && this.m[this.m.length - 1] < value) {
            this.m.pop()
        }
        this.q.push(value)
        this.m.push(value)
    }

    pop_front(): number {
        if (this.q.length === 0) { return -1 }
        let out = this.q.shift() as number
        if (out === this.m[0]) { this.m.shift() }
        return out
    }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

export { MaxQueue }
