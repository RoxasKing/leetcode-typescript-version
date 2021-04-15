/*
  Evaluate the value of an arithmetic expression in Reverse Polish Notation.

  Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

  Note that division between two integers should truncate toward zero.

  It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

  Example 1:
    Input: tokens = ["2","1","+","3","*"]
    Output: 9
    Explanation: ((2 + 1) * 3) = 9

  Example 2:
    Input: tokens = ["4","13","5","/","+"]
    Output: 6
    Explanation: (4 + (13 / 5)) = 6

  Example 3:
    Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    Output: 22
    Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
    = ((10 * (6 / (12 * -11))) + 17) + 5
    = ((10 * (6 / -132)) + 17) + 5
    = ((10 * 0) + 17) + 5
    = (0 + 17) + 5
    = 17 + 5
    = 22

  Constraints:
    1 <= tokens.length <= 10^4
    tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Stack

function evalRPN(tokens: string[]): number {
    let stack: number[] = []
    for (let t of tokens) {
        if (!(t === '+' || t === '-' || t === '*' || t === '/')) {
            stack.push(parseInt(t))
            continue
        }
        let num2 = stack.pop() as number
        let num1 = stack.pop() as number
        switch (t) {
            case '+':
                stack.push(num1 + num2)
                break
            case '-':
                stack.push(num1 - num2)
                break
            case '*':
                stack.push(num1 * num2)
                break
            case '/':
                stack.push(~~(num1 / num2))
                break
        }
    }
    return stack.pop() as number
}

export { evalRPN }
