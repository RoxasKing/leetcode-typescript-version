/*
  Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

  For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

  Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    1. I can be placed before V (5) and X (10) to make 4 and 9.
    2. X can be placed before L (50) and C (100) to make 40 and 90.
    3. C can be placed before D (500) and M (1000) to make 400 and 900.

  Given a roman numeral, convert it to an integer.

  Example 1:
    Input: s = "III"
    Output: 3

  Example 2:
    Input: s = "IV"
    Output: 4

  Example 3:
    Input: s = "IX"
    Output: 9

  Example 4:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.

  Example 5:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

  Constraints:
    1. 1 <= s.length <= 15
    2. s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    3. It is guaranteed that s is a valid roman numeral in the range [1, 3999].

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/roman-to-integer
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Math

function romanToInt(s: string): number {
    let dict = new Map<string, number>()
    dict.set('I', 1)
    dict.set('V', 5)
    dict.set('X', 10)
    dict.set('L', 50)
    dict.set('C', 100)
    dict.set('D', 500)
    dict.set('M', 1000)
    let out = 0
    for (let i = 0; i < s.length; i++) {
        out += dict.get(s[i]) as number
        if (i > 0 && dict.get(s[i - 1]) as number < (dict.get(s[i]) as number)) {
            out -= 2 * (dict.get(s[i - 1]) as number)
        }
    }
    return out
}

export { romanToInt }
