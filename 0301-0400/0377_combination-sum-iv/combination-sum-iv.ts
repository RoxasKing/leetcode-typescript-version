/*
  Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

  The answer is guaranteed to fit in a 32-bit integer.

  Example 1:
    Input: nums = [1,2,3], target = 4
    Output: 7
    Explanation:
      The possible combination ways are:
      (1, 1, 1, 1)
      (1, 1, 2)
      (1, 2, 1)
      (1, 3)
      (2, 1, 1)
      (2, 2)
      (3, 1)
      Note that different sequences are counted as different combinations.

  Example 2:
    Input: nums = [9], target = 3
    Output: 0

  Constraints:
    1. 1 <= nums.length <= 200
    2. 1 <= nums[i] <= 1000
    3. All the elements of nums are unique.
    4. 1 <= target <= 1000

  Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/combination-sum-iv
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Dynamic Programming

function combinationSum4(nums: number[], target: number): number {
    nums.sort((a, b) => (a < b) ? -1 : (a > b) ? 1 : 0)
    let dp = [1]
    for (let i = 1; i <= target; i++) {
        dp.push(0)
        for (let num of nums) {
            if (num > i) { break }
            dp[i] += dp[i - num]
        }
    }
    return dp[target]
}

export { combinationSum4 }
