/*
  Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.

  Example 1:
	Input: s = "tree"
	Output: "eert"
	Explanation: 'e' appears twice while 'r' and 't' both appear once.
	  So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

  Example 2:
	Input: s = "cccaaa"
	Output: "aaaccc"
	Explanation: Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
	  Note that "cacaca" is incorrect, as the same characters must be together.

  Example 3:
	Input: s = "Aabb"
	Output: "bbAa"
	Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
	  Note that 'A' and 'a' are treated as two different characters.

  Constraints:
	1. 1 <= s.length <= 5 * 10^5
	2. s consists of English letters and digits.

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/sort-characters-by-frequency
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// Hash
// Sort

function frequencySort(s: string): string {
	let cnt = new Array<number>(128).fill(0)
	let arr: number[] = []
	for (let i = 0; i < 128; i++) { arr.push(i) }
	for (let i = 0; i < s.length; i++) { cnt[s.charCodeAt(i)]++ }
	arr.sort((a, b) => cnt[b] - cnt[a])
	let out = ''
	for (let i of arr) {
		for (; cnt[i] > 0; cnt[i]--) { out += String.fromCharCode(i) }
	}
	return out
}

export { frequencySort }
