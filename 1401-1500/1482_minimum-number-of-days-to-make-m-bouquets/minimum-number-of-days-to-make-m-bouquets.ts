/*
  Given an integer array bloomDay, an integer m and an integer k.

  We need to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

  The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

  Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

  Example 1:
    Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
    Output: 3
    Explanation: Let's see what happened in the first three days. x means flower bloomed and _ means flower didn't bloom in the garden.
      We need 3 bouquets each should contain 1 flower.
      After day 1: [x, _, _, _, _]   // we can only make one bouquet.
      After day 2: [x, _, _, _, x]   // we can only make two bouquets.
      After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.

  Example 2:
    Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
    Output: -1
    Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.

  Example 3:
    Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
    Output: 12
    Explanation: We need 2 bouquets each should have 3 flowers.
      Here's the garden after the 7 and 12 days:
      After day 7: [x, x, x, x, _, x, x]
      We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
      After day 12: [x, x, x, x, x, x, x]
      It is obvious that we can make two bouquets in different ways.

  Example 4:
    Input: bloomDay = [1000000000,1000000000], m = 1, k = 1
    Output: 1000000000
    Explanation: You need to wait 1000000000 days to have a flower ready for a bouquet.

  Example 5:
    Input: bloomDay = [1,10,2,9,3,8,4,7,5,6], m = 4, k = 2
    Output: 9

  Constraints:
    1. bloomDay.length == n
    2. 1 <= n <= 10^5
    3. 1 <= bloomDay[i] <= 10^9
    4. 1 <= m <= 10^6
    5. 1 <= k <= n

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Binary Search

function minDays(bloomDay: number[], m: number, k: number): number {
    if (bloomDay.length < m * k) { return -1 }

    let min = Infinity, max = 0
    for (let flower of bloomDay) {
        min = Math.min(min, flower)
        max = Math.max(max, flower)
    }

    let l = min, r = max
    while (l < r) {
        let limit = (l + r) >> 1
        if (!isValid(bloomDay, m, k, limit)) {
            l = limit + 1
        } else {
            r = limit
        }
    }
    return l
};

function isValid(bloomDay: number[], m: number, k: number, limit: number): boolean {
    let cnt = 0, cur = 0
    for (let flower of bloomDay) {
        if (flower > limit) {
            cur = 0
        } else {
            cur++
            if (cur === k) {
                cnt++
                cur = 0
            }
        }
    }
    return cnt >= m
}

export { minDays }
